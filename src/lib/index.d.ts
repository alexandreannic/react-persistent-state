import * as React from 'react'
import {Dispatch, SetStateAction} from 'react'

export function usePersistentState<S>(initialState: S | (() => S), key?): [S, Dispatch<SetStateAction<S>>, () => void];

export abstract class PersistentComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
  protected clearPersistentState(): void;
}
