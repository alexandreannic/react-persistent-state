"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistentState = void 0;
var hash_1 = require("../utils/hash");
var react_1 = require("react");
var usePersistentState = function (initialState, _a) {
    var _b = _a.storageKey, storageKey = _b === void 0 ? 'react-persistent-state' + (0, hash_1.generateId)() : _b, _c = _a.transformFromStorage, transformFromStorage = _c === void 0 ? function (_) { return _; } : _c;
    var isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;
    var getInitialValue = function () {
        if (!isLocalStorageAvailable)
            return initialState;
        var storedValue = localStorage.getItem(storageKey);
        if (storedValue) {
            try {
                return transformFromStorage(JSON.parse(storedValue));
            }
            catch (error) {
                console.error("Error parsing localStorage key \"".concat(storageKey, "\":"), error);
            }
        }
        return initialState;
    };
    var _d = (0, react_1.useState)(getInitialValue()), state = _d[0], setState = _d[1];
    (0, react_1.useEffect)(function () {
        localStorage.setItem(storageKey, JSON.stringify(state));
    }, [storageKey, state]);
    var clear = (0, react_1.useCallback)(function () {
        localStorage.clear();
        setState(initialState);
    }, [initialState]);
    return [state, setState, clear];
};
exports.usePersistentState = usePersistentState;
//# sourceMappingURL=usePersistentState.js.map