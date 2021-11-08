import dayJs from 'dayjs'



export default class OS_Date{
    constructor(){

        let date = new Date()
        this.date = {
            month:dayJs().month(),
            day:dayJs().date(),
            time:date.toLocaleTimeString(),


        }

       

        switch (this.date.day) {
            case 1:
                this.ordinal = 'st'
                break;
            case 2:
                this.ordinal = 'nd'
                break;
            case 3:
                this.ordinal = 'rd'
                break;
        
            default:
                if(this.date.day >= 4){
                    this.ordinal = 'th'
                }
                break;
        }



        switch (this.date.month) {
            case 0:
                this.monthName = 'Jan.'
                break;
            case 1:
                this.monthName = 'Feb.'
                break;
            case 2:
                this.monthName = 'Mar.'
                break;
            case 3:
                this.monthName = 'Apr.'
                break;
            case 4:
                this.monthName = 'May.'
                break;
            case 5:
                this.monthName = 'Jun.'
                break;
            case 6:
                this.monthName = 'July.'
                break;
            case 7:
                this.monthName = 'Aug.'
                break;
            case 8:
                this.monthName = 'Sept.'
                break;
            case 9:
                this.monthName = 'Oct.'
                break;
            case 10:
                this.monthName = 'Nov.'
                break;
            case 11:
                this.monthName = 'Dec.'
                break;
            default:
                break;
        }

    }

    getDate(){
        this.date.time = new Date().toLocaleTimeString()
        return `${this.date.day}${this.ordinal} ${this.monthName} ${this.date.time} `
    }
}