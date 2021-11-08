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

