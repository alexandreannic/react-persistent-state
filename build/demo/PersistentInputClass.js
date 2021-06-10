"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.PersistentInputClass = void 0;
var React = __importStar(require("react"));
var PersistentComponent_1 = require("../lib/PersistentState/PersistentComponent");
var PersistentInputClass = /** @class */ (function (_super) {
    __extends(PersistentInputClass, _super);
    function PersistentInputClass(props) {
        var _this = _super.call(this, props, props.persitentKey) || this;
        _this.state = {
            value: 'test',
        };
        _this.handleChange = function (event) {
            _this.setState({ value: event.target.value });
        };
        return _this;
    }
    PersistentInputClass.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("input", { value: this.state.value, onChange: this.handleChange }),
            React.createElement("button", { onClick: this.clearPersistentState }, "Clear from local storage")));
    };
    return PersistentInputClass;
}(PersistentComponent_1.PersistentComponent));
exports.PersistentInputClass = PersistentInputClass;
//# sourceMappingURL=PersistentInputClass.js.map