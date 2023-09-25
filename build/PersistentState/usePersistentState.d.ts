import { Dispatch, SetStateAction } from 'react';
export declare const usePersistentState: <S>(initialState: S | (() => S), key?: string) => [S, Dispatch<SetStateAction<S>>, () => void];
