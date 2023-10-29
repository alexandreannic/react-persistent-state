import { Dispatch, SetStateAction } from 'react';
export declare const usePersistentState: <S>(initialState: S | (() => S), { storageKey, transformFromStorage, }: {
    transformFromStorage?: ((_: S) => S) | undefined;
    storageKey: string;
}) => [S, Dispatch<SetStateAction<S>>, () => void];
