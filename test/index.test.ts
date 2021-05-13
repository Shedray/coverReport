import "mocha"
import {it} from "mocha";
import {gengerateReport} from "../src";
import {ViewData} from "../src/index.type";


describe("基础测试",()=>{
    it("正常测试",()=>{
        const test:ViewData={
            codeDir: '',
            details: {
                uncovlines:'1,2,4',
                covlines:'3,4,5',
                lines:{
                    hit:1,
                    found:12
                },
                functions:{
                    hit:1,
                    found:12
                },
                branches:{
                    hit:1,
                    found:12
                },

            },
            fileTitle: "index",
            module: "src",
            rates: {
                functionsRate:'120',
                linesRate:'100',
                branchesRate:'100'
            }

        }
        gengerateReport('/Users/renpenglei/WebstormProjects/coverreport/src/index.ts',test,"/Users/renpenglei/WebstormProjects/coverreport/src/")

    })
})
