/**
 * Alternative API
 */
export declare class LocalStorageEntity<T> {
    private key;
    constructor(key: string);
    save: (value: T) => void;
    load: () => T;
    clear: () => void;
}
