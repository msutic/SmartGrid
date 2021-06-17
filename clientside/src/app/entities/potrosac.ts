import { Lokacija } from "./lokacija";

export class Potrosac {
    id:number;
    ime:String;
    prezime:String;
    ulica:String;
    grad:String;
    broj:number;
    broj_telefona:String;
    tip:String;
    prioritet:number;
    postanski_broj:String;
    constructor(ime:String,prezime:String,ulica:String,grad:String,broj:number,broj_telefona:String,tip:String,prioritet:number,postanski_broj:String)
    {
        this.ime=ime;
        this.prezime=prezime;
        this.ulica=ulica;
        this.grad=grad;
        this.broj=broj;
        this.broj_telefona=broj_telefona;
        this.tip=tip;
        this.prioritet=prioritet;
        this.postanski_broj=postanski_broj;
        
    }

}
