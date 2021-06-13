export class Notifikacija {
    tip:String;
    tekst:String;
    vreme:Date;
    procitana:boolean;
    ikona:String;
    constructor(tip:String,tekst:String,vreme:Date)
    {
        this.tip=tip;
        this.tekst=tekst;
        this.vreme=vreme;
        this.procitana=false;
        switch(tip){
            case "error":
                this.ikona="error";
                break;
            case "warning":
                this.ikona="warning";
                break;
            case "success":
                this.ikona="check_outline";
                break;
            case "info":
                this.ikona="info";
                break;
            default:
                break;
        }
    }
}
