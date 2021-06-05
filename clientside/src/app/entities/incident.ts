import { TypeFlags } from "typescript";
import { Device } from "./device";

export class Incident {
    id: number;
    type: string;
    priority: number;
    confirmed: boolean;
    status: string;
    description: string;
    eta: Date;
    ata: Date;
    outageTime: Date;
    etr: Date;
    affectedConsumersNumber: number;
    calls: number;
    voltage: number;
    scheduledTime: Date;
    //devices: Array<Device>;
    cause: string;
    subcause: string;
    constructionType: string;
    material: string;
    //callsList: Array<Call>;
    crew: string;
    multimediaAttachment: number;

    constructor(type: string, priority: number, confirmed: boolean, status: string, description: string,
        eta: Date, ata: Date, outageTime: Date, etr: Date, affectedConsumersNumber: number,
        calls: number, voltage: number, scheduledTime: Date, cause: string, subcause: string, 
        constructionType: string, material: string, crew: string, multimediaAttachment: number){
            this.type = type;
            this.priority = priority;
            this.confirmed = confirmed;
            this.status = status;
            this.description = description;
            this.eta = eta;
            this.ata = ata;
            this.outageTime = outageTime;
            this.etr = etr;
            this.affectedConsumersNumber = affectedConsumersNumber;
            this.calls = calls;
            this.voltage = voltage;
            this.scheduledTime = scheduledTime;
            this.cause = cause;
            this.subcause = subcause;
            this.constructionType = constructionType;
            this.material = material;
            this.crew = crew;
            this.multimediaAttachment = multimediaAttachment;
        }
}


