"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
function generateId(key) {
    var _a;
    return 'rps_' + generateHash((_a = new Error().stack) !== null && _a !== void 0 ? _a : '') + key;
}
exports.generateId = generateId;
function generateHash(x) {
    return x.split('').reduce(function (prevHash, currVal) { return (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0; }, 0);
}
//# sourceMappingURL=hash.js.map