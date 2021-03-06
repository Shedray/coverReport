import {join} from 'path'
import fs from 'fs'
import {ViewData} from "./index.type";
import {replaceAll} from "./utils/strings";

function gengerateReport(codeDir:string, viewData:ViewData, outFileDir:string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Mustache = require('mustache');
    const template_dir = join(__dirname, '../template/single.template');
    const viewBody = Object.create(viewData);
    const temp = fs.readFileSync(template_dir).toString();
    let code
    try {
        code = fs.readFileSync(codeDir).toString();
    }catch (e) {
        throw Error("无效代码路径")
    }
    viewBody['code'] = code;
    const output = Mustache.render(temp, viewBody);
    try {
        fs.writeFileSync(
            outFileDir + '/' + replaceAll(viewBody.fileTitle, '/', '.') + '.html',
            output,
            'utf8',
        );
    }catch (e) {
        throw Error("无效导出路径")
    }

}

export {gengerateReport}
