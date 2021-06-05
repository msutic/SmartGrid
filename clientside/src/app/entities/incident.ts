import { Device } from "./device";

export class Incident {
    id: number;
    type: IncidentType;
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
    devices: Array<Device>;
    cause: string;
    subcause: string;
    constructionType: string;
    material: string;
    //callsList: Array<Call>;
    crew: string;
    multimediaAttachment: number;
}
export enum IncidentType{

}
