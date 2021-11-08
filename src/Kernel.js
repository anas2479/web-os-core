import { Filesystem } from "./Filesystem";

export default class Kernel{
    constructor(config){

        this.filesystem = new Filesystem(config.files)
        this.apps = config.apps || []
        this.plugins = []
    }


    registerPlugin(plugin){
        plugins.push(plugin)
    }
}

