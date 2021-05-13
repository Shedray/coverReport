function replaceAll(str:string, substr:string, newstr:string):string {
    let p = -1; // 字符出现位置
    let s = 0; // 下一次起始位置

    while ((p = str.indexOf(substr, s)) > -1) {
        s = p + newstr.length; // 位置 + 值的长度
        str = str.replace(substr, newstr);
    }

    return str;
}
export {replaceAll}
