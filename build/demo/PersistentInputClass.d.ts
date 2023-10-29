import * as React from 'react';
import { PersistentComponent } from '../PersistentState/PersistentComponent';
export declare class PersistentInputClass extends PersistentComponent<any, any> {
    state: {
        value: string;
    };
    constructor(props: any);
    handleChange: (event: any) => void;
    render(): React.JSX.Element;
}
