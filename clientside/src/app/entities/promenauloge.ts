import { MatGridTileHeaderCssMatStyler } from "@angular/material/grid-list";

export class Promenauloge {
    id:number;
    idkorisnika:number;
    korisnickoime:String;
    starauloga:String;
    novauloga:String;
    constructor(idkorisnika:number,korisnickoime:String,starauloga:String,novauloga:String)
    {
        this.idkorisnika=idkorisnika;
        this.starauloga=starauloga;
        this.novauloga=novauloga;
        this.korisnickoime=korisnickoime;
    }
}
