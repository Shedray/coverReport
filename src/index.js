"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gengerateReport = void 0;
var path_1 = require("path");
var fs_1 = __importDefault(require("fs"));
var strings_1 = require("./utils/strings");
function gengerateReport(codeDir, viewData, outFileDir) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var Mustache = require('mustache');
    var template_dir = path_1.join(__dirname, '../template/single.template');
    var viewBody = Object.create(viewData);
    var temp = fs_1.default.readFileSync(template_dir).toString();
    var code;
    try {
        code = fs_1.default.readFileSync(codeDir).toString();
    }
    catch (e) {
        throw Error("无效代码路径");
    }
    viewBody['code'] = code;
    var output = Mustache.render(temp, viewBody);
    try {
        fs_1.default.writeFileSync(outFileDir + '/' + strings_1.replaceAll(viewBody.fileTitle, '/', '.') + '.html', output, 'utf8');
    }
    catch (e) {
        throw Error("无效导出路径");
    }
}
exports.gengerateReport = gengerateReport;
