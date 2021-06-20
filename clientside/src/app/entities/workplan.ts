import { create } from "node:domain";
import {Device} from "src/app/entities/device";
import { Instrukcija } from "./instrukcija";

export class Workplan {
    id:number;
    type:String;
    order:String;
    incidentId:number;
    status:String;
    startDate:Date;
    endDate:Date;
    crewId:number;
    createdBy:String;
    purpuse:String;
    notes:String;
    company:String;
    phoneNumber:String;
    createdOn:Date;
    devices: Array<Device>;
    instructions:Array<Instrukcija>

    constructor(type:String,status:String,startDate:Date,endDate:Date,crewId:number,purpuse:String,company:String,devices:Array<Device>,instructions:Array<Instrukcija>,order?:String,incidentId?:number,notes?:String,phoneNumber?:String){
        this.type=type;
        this.order=order;
        this.incidentId=incidentId;
        this.status=status;
        this.startDate=startDate;
        this.endDate=endDate;
        this.crewId=crewId;
        this.createdBy=localStorage.getItem("sessionUsername");
        this.purpuse=purpuse;
        this.notes=notes;
        this.company=company;
        this.phoneNumber=phoneNumber;
        this.createdOn=new Date(Date.now());
        this.devices=devices;
        this.instructions=instructions;
    }
}
