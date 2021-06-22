import { Variable } from "@angular/compiler/src/render3/r3_ast";

export class Instrukcija {
    id: number;
    description:String;
    executed:Boolean;
    deviceId:String;
    deviceType:String;
    constructor(ide:number,desc:String,deviceId:String,deviceType:String)
    {
        this.id=ide;
        this.description=desc;
        this.deviceId=deviceId;
        this.deviceType=deviceType;
        this.executed=false;
    }

}
