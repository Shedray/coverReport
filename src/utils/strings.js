"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = void 0;
function replaceAll(str, substr, newstr) {
    var p = -1; // 字符出现位置
    var s = 0; // 下一次起始位置
    while ((p = str.indexOf(substr, s)) > -1) {
        s = p + newstr.length; // 位置 + 值的长度
        str = str.replace(substr, newstr);
    }
    return str;
}
exports.replaceAll = replaceAll;
