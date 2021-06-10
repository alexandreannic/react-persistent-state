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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentComponent = void 0;
var React = __importStar(require("react"));
var localStorageApi_1 = require("../utils/localStorageApi");
var hash_1 = require("../utils/hash");
var lodash_throttle_1 = __importDefault(require("lodash.throttle"));
var PersistentComponent = /** @class */ (function (_super) {
    __extends(PersistentComponent, _super);
    function PersistentComponent(props, key) {
        var _this = _super.call(this, props) || this;
        _this.clearPersistentState = function () {
            _this.localStorage.clear();
        };
        _this.persistState = lodash_throttle_1.default(function () { return _this.localStorage.save(_this.state); }, 1000);
        _this.localStorage = new localStorageApi_1.LocalStorageEntity(hash_1.generateId(key));
        return _this;
    }
    PersistentComponent.prototype.componentWillMount = function () {
        var savedState = this.localStorage.load();
        if (savedState) {
            this.state = Object.assign(this.state, savedState);
        }
    };
    PersistentComponent.prototype.setState = function (state, callback) {
        var _this = this;
        _super.prototype.setState.call(this, state, function () {
            if (callback)
                callback();
            _this.persistState();
        });
    };
    return PersistentComponent;
}(React.Component));
exports.PersistentComponent = PersistentComponent;
//# sourceMappingURL=PersistentComponent.js.map