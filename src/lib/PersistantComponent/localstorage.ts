const storage = {
  load: (key: string): any => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return null;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error(err);
      return null;
    }
  },

  save: (key: string, value: any): void => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (err) {
      console.error(err);
    }
  },

  clear: (key: string): void => {
    localStorage.removeItem(key);
  }
};

export class LocalStorageEntity<T> {

  constructor(private key: string) {
  }

  save(value: T): void {
    return storage.save(this.key, value);
  }

  load(): T {
    return storage.load(this.key) as T;
  }

  clear(): void {
    storage.clear(this.key);
  }
}
