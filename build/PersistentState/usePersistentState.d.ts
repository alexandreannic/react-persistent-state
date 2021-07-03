import { Dispatch, SetStateAction } from 'react';
export declare function usePersistentState<S>(initialState: S | (() => S), key?: string): [S, Dispatch<SetStateAction<S>>, () => void];
