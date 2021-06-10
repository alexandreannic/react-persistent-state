"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentCounterHook = void 0;
var React = __importStar(require("react"));
var usePersistentState_1 = require("../PersistentState/usePersistentState");
var PersistentCounterHook = function (_a) {
    var persistentKey = _a.persistentKey;
    var _b = usePersistentState_1.usePersistentState(0, persistentKey), value = _b[0], setValue = _b[1], clearValue = _b[2];
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { return setValue(function (prev) { return prev + 1; }); } }, value),
        React.createElement("button", { onClick: clearValue }, "Clear from local storage")));
};
exports.PersistentCounterHook = PersistentCounterHook;
//# sourceMappingURL=PersistentCounterHook.js.map