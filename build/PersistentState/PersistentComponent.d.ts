import * as React from 'react';
export declare abstract class PersistentComponent<P = {}, S = {}, SS = any> extends React.Component<P, S, SS> {
    private localStorage;
    protected constructor(props: P, key?: string);
    componentWillMount(): void;
    setState<K extends keyof S>(state: ((prevState: Readonly<S>, props: P) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null), callback?: () => void): void;
    protected clearPersistentState: () => void;
    private persistState;
}
