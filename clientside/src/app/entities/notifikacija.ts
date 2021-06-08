export class Notifikacija {
    tip:String;
    tekst:String;
    vreme:Date;
    procitana:boolean;
    ikona:String;
    constructor(tip:String,tekst:String,vreme:Date,ikona:String)
    {
        this.tip=tip;
        this.tekst=tekst;
        this.vreme=vreme;
        this.procitana=false;
        this.ikona=ikona;
    }
}
