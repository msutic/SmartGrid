import { Lokacija } from "./lokacija";

export class Potrosac {
    id:number;
    ime:String;
    prezime:String;
    ulica:String;
    grad:String;
    broj_telefona:String;
    tip:String;
    prioritet:number;
    postanski_broj:String;
    constructor(ime:String,prezime:String,ulica:String,grad:String,tip:String,broj_telefona? :String,postanski_broj?:String,prioritet?:number)
    {
        this.ime=ime;
        this.prezime=prezime;
        this.ulica=ulica;
        this.grad=grad;
        this.broj_telefona=broj_telefona;
        this.tip=tip;
        this.prioritet=prioritet;
        this.postanski_broj=postanski_broj;
        
    }

}
