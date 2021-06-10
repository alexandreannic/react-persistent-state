"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePersistentState = void 0;
var localStorageApi_1 = require("../utils/localStorageApi");
var hash_1 = require("../utils/hash");
var react_1 = require("react");
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
function usePersistentState(initialState, key) {
    var _a;
    var initLocalStorage = function () { return new localStorageApi_1.LocalStorageEntity(hash_1.generateId(key)); };
    var storage = react_1.useState(initLocalStorage)[0];
    var _b = react_1.useState((_a = storage.load()) !== null && _a !== void 0 ? _a : initialState), state = _b[0], setState = _b[1];
    var throttled = react_1.useRef(lodash_throttle_1.default(storage.save, 1000));
    react_1.useEffect(function () { return throttled.current(state); }, [state]);
    return [
        state,
        setState,
        function () { return storage.clear(); }
    ];
}
exports.usePersistentState = usePersistentState;
//# sourceMappingURL=usePersistentState.js.map