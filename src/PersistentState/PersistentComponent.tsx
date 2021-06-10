import * as React from 'react'
import {LocalStorageEntity} from '../utils/localStorageApi'
import {generateId} from '../utils/hash'
import throttle from 'lodash.throttle'

export abstract class PersistentComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {

  private localStorage: LocalStorageEntity<S>

  protected constructor(props: P, key?: string) {
    super(props)
    this.localStorage = new LocalStorageEntity<S>(generateId(key))
  }

  componentWillMount() {
    const savedState = this.localStorage.load()
    if (savedState) {
      this.state = Object.assign(this.state, savedState)
    }
  }

  setState<K extends keyof S>(
    state: ((prevState: Readonly<S>, props: P) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
    callback?: () => void
  ): void {
    super.setState(state, () => {
      if (callback) callback()
      this.persistState()
    })
  }

  protected clearPersistentState = () => {
    this.localStorage.clear()
  }

  private persistState = throttle(() => this.localStorage.save(this.state), 1000)
}
