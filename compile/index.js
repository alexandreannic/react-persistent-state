module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var localstorage_1 = __webpack_require__(1);
var PersistantComponent = /** @class */ (function (_super) {
    __extends(PersistantComponent, _super);
    /**
     * /!|/!|/!|
     * Constructor must be called in inheriting class to retrieve Object.getPrototypeOf(this).constructor.name
     * /!|/!|/!|
     */
    function PersistantComponent(props, name) {
        var _this = _super.call(this, props) || this;
        name = name || Object.getPrototypeOf(_this).constructor.name;
        _this.localStorage = new localstorage_1.LocalStorageEntity('pc_' + name);
        return _this;
    }
    PersistantComponent.prototype.componentWillMount = function () {
        var savedState = this.localStorage.load();
        if (savedState) {
            this.state = Object.assign(this.state, savedState);
        }
    };
    PersistantComponent.prototype.setState = function (state, callback) {
        var _this = this;
        _super.prototype.setState.call(this, state, function () {
            if (callback)
                callback();
            _this.save();
        });
    };
    PersistantComponent.prototype.clearPeristantState = function () {
        this.localStorage.clear();
    };
    PersistantComponent.prototype.save = function () {
        // TODO Fix this insane bug: throttle is undefiend
        // console.log(throttle);
        // throttle(() => {
        this.localStorage.save(this.state);
        // }, 1000)();
    };
    return PersistantComponent;
}(React.Component));
exports.PersistantComponent = PersistantComponent;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storage = {
    load: function (key) {
        try {
            var serializedState = localStorage.getItem(key);
            if (serializedState === null) {
                return null;
            }
            return JSON.parse(serializedState);
        }
        catch (err) {
            console.error(err);
            return null;
        }
    },
    save: function (key, value) {
        try {
            var serializedState = JSON.stringify(value);
            localStorage.setItem(key, serializedState);
        }
        catch (err) {
            console.error(err);
        }
    },
    clear: function (key) {
        localStorage.removeItem(key);
    }
};
var LocalStorageEntity = /** @class */ (function () {
    function LocalStorageEntity(key) {
        this.key = key;
    }
    LocalStorageEntity.prototype.save = function (value) {
        return storage.save(this.key, value);
    };
    LocalStorageEntity.prototype.load = function () {
        return storage.load(this.key);
    };
    LocalStorageEntity.prototype.clear = function () {
        storage.clear(this.key);
    };
    return LocalStorageEntity;
}());
exports.LocalStorageEntity = LocalStorageEntity;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PersistantComponent_1 = __webpack_require__(0);
exports.PersistantComponent = PersistantComponent_1.PersistantComponent;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);