import { Device } from "./device";

export class Incident {
    id: number;
    type: string;
    priority: number;
    confirmed: boolean;
    status: string;
    description: string;
    eta: Date;
    etaStr: string;
    ata: Date;
    ataStr: string;
    outageTime: Date;
    outageTimeStr: string;
    etr: Date;
    etrStr: string;
    affectedConsumersNumber: number;
    calls: number;
    voltage: number;
    scheduledTime: Date;
    scheduledTimeStr: string;
    devices: Array<Device>;
    cause: string;
    subCause: string;
    constructionType: string;
    material: string;
    //callsList: Array<Call>;
    crew: string;
    multimediaAttachment: number;

    constructor(type: string = "", priority: number = 3, confirmed: boolean = true, status: string = "", description: string = "",
        eta: Date = new Date(2021,6,15,13,15,0), ata: Date  = new Date(2021,6,15,13,15,0), outageTime: Date  = new Date(2021,6,15,13,15,0),
        etr: Date = new Date(2021,6,15,13,15,0), affectedConsumersNumber: number = 0,
        calls: number = 0, voltage: number = 0, scheduledTime: Date = new Date(2021,6,15,13,15,0), cause: string = "", subCause: string = "", 
        constructionType: string = "", material: string = "", crew: string = "", multimediaAttachment: number = 0){
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
            this.subCause = subCause;
            this.constructionType = constructionType;
            this.material = material;
            this.crew = crew;
            this.multimediaAttachment = multimediaAttachment;
        }
}


