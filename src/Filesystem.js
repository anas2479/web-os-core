import OS_Date from "./utilities/Date";


export class File{
    constructor(name,type,contents){

        this.name = name
        this.type = type
        this.contents = contents || ''

    }

    create(){

        return {
            name:this.name+'.'+this.type,
            content:this.contents,
            createdDate:new OS_Date().getDate()
        }
    }
}


export class Folder{
    constructor(name,subfolders,files){

        this.name = name
        this.subfolders  = subfolders || []
        this.files  = files || []
    }

    create(){

        let folder = {
            name:this.name,
            subfolders:this.subfolders,
            files:this.files,
            createdDate:new OS_Date().getDate()
        }

        return folder
    }
}





