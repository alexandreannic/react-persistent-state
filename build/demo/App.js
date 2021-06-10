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
var React = __importStar(require("react"));
var react_1 = require("react");
var PersistentCounterHook_1 = require("./PersistentCounterHook");
var PersistentInputClass_1 = require("./PersistentInputClass");
var App = function () {
    var _a = react_1.useState(true), s = _a[0], ss = _a[1];
    return (React.createElement("div", { style: {
            maxWidth: 800,
            margin: '20px auto',
        } },
        React.createElement("h1", null, "extend PersistentComponent"),
        React.createElement("button", { onClick: function () { return ss(!s); } }, "a"),
        s && React.createElement(PersistentInputClass_1.PersistentInputClass, { persitentKey: 1 }),
        React.createElement(PersistentInputClass_1.PersistentInputClass, { persitentKey: 2 }),
        React.createElement("h1", null, "usePeristentState"),
        React.createElement(PersistentCounterHook_1.PersistentCounterHook, { persistentKey: 1 }),
        React.createElement(PersistentCounterHook_1.PersistentCounterHook, { persistentKey: 2 })));
};
exports.default = App;
//# sourceMappingURL=App.js.map