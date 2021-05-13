interface BaseDetail{
    hit:number,
    found:number
}
interface Details{
    covlines: string,
    uncovlines: string,
    lines: BaseDetail,
    functions: BaseDetail,
    branches: BaseDetail,
}

interface Rates{
    linesRate: string;
    functionsRate: string;
    branchesRate: string;
}

export interface ViewData {
    fileTitle: string,
    details:Details,
    codeDir: '',//代码文件的路径
    rates: Rates,
    module?: string, //该代码文件所属的上层 模块或者目录
}

