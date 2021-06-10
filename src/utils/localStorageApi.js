"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageEntity = void 0;
var storage = {
    load: function (key) {
        var serializedState;
        try {
            serializedState = localStorage.getItem(key);
        }
        catch (err) {
            console.error(err);
            return null;
        }
        try {
            return JSON.parse(serializedState);
        }
        catch (err) {
            // Parsing will fail when it's not an object, so simply return the value
            return serializedState;
        }
    },
    save: function (key, value) {
        try {
            var serializedState = (typeof value === 'object') ? JSON.stringify(value) : value;
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
/**
 * Alternative API
 */
var LocalStorageEntity = /** @class */ (function () {
    function LocalStorageEntity(key) {
        var _this = this;
        this.key = key;
        this.save = function (value) {
            return storage.save(_this.key, value);
        };
        this.load = function () {
            return storage.load(_this.key);
        };
        this.clear = function () {
            storage.clear(_this.key);
        };
    }
    return LocalStorageEntity;
}());
exports.LocalStorageEntity = LocalStorageEntity;
//# sourceMappingURL=localStorageApi.js.map