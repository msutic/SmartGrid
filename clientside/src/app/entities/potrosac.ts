import { Lokacija } from "./lokacija";

export class Potrosac {
    ime:String;
    prezime:String;
    lokacija:Lokacija;
    broj:String;
    id:number;
    tip:String;
    constructor(ime:String,prezime:String,lokacija:Lokacija,broj:String,id:number,tip:String)
    {
        this.ime=ime;
        this.prezime=prezime;
        this.lokacija=lokacija;
        this.broj=broj;
        this.id=id;
        this.tip=tip;
    }

}
