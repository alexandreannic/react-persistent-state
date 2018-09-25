import * as React from 'react';
import {LocalStorageEntity} from './localstorage';
import throttle from 'lodash/throttle';

export abstract class PersistantComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {

  private localStorage: LocalStorageEntity<S>;

  /**
   * /!|/!|/!|
   * Constructor must be called in inheriting class to retrieve Object.getPrototypeOf(this).constructor.name
   * /!|/!|/!|
   */
  protected constructor(props: P, name?: string) {
    super(props);
    name = name || Object.getPrototypeOf(this).constructor.name;
    this.localStorage = new LocalStorageEntity<S>('pc_' + name);
  }

  componentWillMount() {
    const savedState = this.localStorage.load();
    if (savedState) {
      this.state = Object.assign(this.state, savedState);
    }
  }

  setState<K extends keyof S>(
    state: ((prevState: Readonly<S>, props: P) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
    callback?: () => void
  ): void {
    super.setState(state, () => {
      if (callback) callback();
      this.save();
    });
  }

  protected clearPeristantState() {
    this.localStorage.clear();
  }

  private save() {
    // TODO Fix this insane bug: throttle is undefiend
    // console.log(throttle);
    // throttle(() => {
      this.localStorage.save(this.state);
    // }, 1000)();
  }
}
