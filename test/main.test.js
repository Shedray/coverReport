"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var mocha_1 = require("mocha");
var src_1 = require("../src");
describe("基础测试", function () {
    mocha_1.it("正常测试", function () {
        var test = {
            codeDir: '',
            details: {
                uncovlines: '1,2,4',
                covlines: '1,2,4',
                lines: {
                    hit: 1,
                    found: 12
                },
                functions: {
                    hit: 1,
                    found: 12
                },
                branches: {
                    hit: 1,
                    found: 12
                },
            },
            fileTitle: "测试脚本",
            module: "测试",
            rates: {
                functionsRate: '100',
                linesRate: '100',
                branchesRate: '100'
            }
        };
        src_1.gengerateReport('/Users/renpenglei/WebstormProjects/coverreport/src/index.ts', test, "/Users/renpenglei/WebstormProjects/coverreport/src/");
    });
});
