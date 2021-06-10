/// <reference types="react" />
import { PersistentComponent } from '../PersistentState/PersistentComponent';
export declare class PersistentInputClass extends PersistentComponent<any, any> {
    state: {
        value: string;
    };
    constructor(props: any);
    handleChange: (event: any) => void;
    render(): JSX.Element;
}
