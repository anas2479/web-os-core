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







export class Filesystem{
    constructor(files){

        let fallbackFiles = [
            {
                name:"root",
                subfolders:[],
                files:[],
                createdDate: new OS_Date().getDate(),
            }
        ]


        this.files = files || fallbackFiles

        this.currentLocation = files[0]
    }

    newFile(name,type,contents){
        let content = contents || ''
        let file = new File(name,type,content).create()

        this.files.push(file)

        return file
    }

    newFolder(name,subfolders,files){
        let folder = new Folder(name,subfolders,files).create()
        this.currentLocation.subfolders.push(folder)

        return folder
    }
}


