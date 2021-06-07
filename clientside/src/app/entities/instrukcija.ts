import { Variable } from "@angular/compiler/src/render3/r3_ast";

export class Instrukcija {
    id: number;
    description:String;
    executed:Boolean;
    element:String;
    constructor(ide:number,desc:String,elemente:String)
    {
        this.id=ide;
        this.description=desc;
        this.element=elemente;
        this.executed=false;
    }

}
