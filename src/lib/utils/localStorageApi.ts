const storage = {
  load: (key: string): any => {
    let serializedState
    try {
      serializedState = localStorage.getItem(key)
    } catch (err) {
      console.error(err)
      return null
    }
    try {
      return JSON.parse(serializedState)
    } catch (err) {
      // Parsing will fail when it's not an object, so simply return the value
      return serializedState
    }
  },

  save: (key: string, value: any): void => {
    try {
      const serializedState = (typeof value === 'object') ? JSON.stringify(value) : value
      localStorage.setItem(key, serializedState)
    } catch (err) {
      console.error(err)
    }
  },

  clear: (key: string): void => {
    localStorage.removeItem(key)
  }
}

/**
 * Alternative API
 */
export class LocalStorageEntity<T> {

  constructor(private key: string) {
  }

  save = (value: T): void => {
    return storage.save(this.key, value)
  }

  load = (): T => {
    return storage.load(this.key) as T
  }

  clear = (): void => {
    storage.clear(this.key)
  }
}
