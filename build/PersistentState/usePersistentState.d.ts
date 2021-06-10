import { Dispatch, SetStateAction } from 'react';
export declare function usePersistentState<S>(initialState: S | (() => S), key?: any): [S, Dispatch<SetStateAction<S>>, () => void];
