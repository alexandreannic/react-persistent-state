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
    var localStorage = react_1.useMemo(function () { return new localStorageApi_1.LocalStorageEntity(hash_1.generateId(key)); }, []);
    var _b = react_1.useState((_a = localStorage.load()) !== null && _a !== void 0 ? _a : initialState), state = _b[0], setState = _b[1];
    var throttled = react_1.useRef(lodash_throttle_1.default(localStorage.save, 1000));
    react_1.useEffect(function () { return throttled.current(state); }, [state]);
    return [
        state,
        setState,
        function () {
            localStorage.clear();
            setState(initialState);
        }
    ];
}
exports.usePersistentState = usePersistentState;
//# sourceMappingURL=usePersistentState.js.map