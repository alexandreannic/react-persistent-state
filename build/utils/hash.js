"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
var generateId = function (key) {
    var _a;
    return 'react-persistant-state-' + (key !== null && key !== void 0 ? key : generateHash((_a = new Error().stack) !== null && _a !== void 0 ? _a : ''));
};
exports.generateId = generateId;
var generateHash = function (x) {
    return x.split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
};
//# sourceMappingURL=hash.js.map