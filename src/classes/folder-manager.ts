import {join} from "path";
import {existsSync, mkdirSync} from "fs";
import {deletePathOrFile} from "st-rm-rf";

const mkdir = (path: string) => {
    if (!existsSync(path)) {
        mkdirSync(path, {recursive: true})
    }
    return path;
}

export class FolderManager {
    private readonly outputFolder: string;

    constructor(outputFolder: string) {
        this.outputFolder = join(process.cwd(), outputFolder);
        deletePathOrFile(this.outputFolder);
    }

    getServiceFolder() {
        return mkdir(join(this.outputFolder, 'service'))
    }

    getFunctionFolder() {
        return mkdir(join(this.outputFolder, 'function'));
    }

    getInterfaceFolder() {
        return mkdir(join(this.outputFolder, 'interface'));
    }

    getEnumerationFolder() {
        return mkdir(join(this.outputFolder, 'enumeration'));
    }

    getInterfaceComponentsFolder() {
        return mkdir(join(this.getInterfaceFolder(), 'components'));
    }

    getInterfaceParameterFolder() {
        return mkdir(join(this.getInterfaceFolder(), 'parameter'));
    }
}
