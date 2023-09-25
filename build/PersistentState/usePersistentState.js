"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistentState = void 0;
var hash_1 = require("../utils/hash");
var react_1 = require("react");
var usePersistentState = function (initialState, key) {
    if (key === void 0) { key = 'react-persistent-state' + hash_1.generateId(); }
    var isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
    var getInitialValue = function () {
        if (!isLocalStorageAvailable)
            return initialState;
        var storedValue = localStorage.getItem(key);
        if (storedValue) {
            try {
                return JSON.parse(storedValue);
            }
            catch (error) {
                console.error("Error parsing localStorage key \"" + key + "\":", error);
            }
        }
        return initialState;
    };
    var _a = react_1.useState(getInitialValue()), state = _a[0], setState = _a[1];
    react_1.useEffect(function () {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    var clear = react_1.useCallback(function () {
        localStorage.clear();
        setState(initialState);
    }, [initialState]);
    return [state, setState, clear];
};
exports.usePersistentState = usePersistentState;
//# sourceMappingURL=usePersistentState.js.map