export class LokacijaPrioritet {
    id:number;
    ulica:String;
    grad:String;
    prioritet:number;
    constructor(ulica:String,grad:String,prioritet:number)
    {
        this.ulica=ulica;
        this.grad=grad;
        this.prioritet=prioritet;
    }
}
