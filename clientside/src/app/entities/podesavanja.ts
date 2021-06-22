export class Podesavanja {

    id:number;
    obavezna:boolean;
    errorvidljive:boolean;
    infovidljive:boolean;
    warningvidljive:boolean;
    successvidljive:boolean;

    constructor(obavezna:boolean,errorvidljive:boolean,infovidljive:boolean,warningvidljive:boolean,successvidljive:boolean)
    {
        this.obavezna=obavezna;
        this.errorvidljive=errorvidljive;
        this.infovidljive=infovidljive;
        this.warningvidljive=warningvidljive;
        this.successvidljive=successvidljive;
        
    }

}
