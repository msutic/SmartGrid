import { DateFilterFn } from "@angular/material/datepicker";

export class BasicInfo {
    type: string;
    priority: number;
    confirmed: boolean;
    status: string;
    description: string;
    eta: Date;
    ata: Date;
    affectedConsumers: number;
    outageTime: Date;
    etr: Date;
    calls: number;
    voltage: number;
    scheduledTime: Date;

    constructor(type: string, priority: number = 2, confirmed: boolean, status: string,
        description: string, eta: Date, ata: Date, affectedConsumers: number, outageTime: Date, etr: Date,
        calls: number, voltage: number, scheduledTime: Date){
            this.type = type;
            this.priority = priority;
            this.confirmed = confirmed;
            this.status = status;
            this.description = description;
            this.eta = eta;
            this.ata = ata;
            this.affectedConsumers = affectedConsumers;
            this.outageTime = outageTime;
            this.etr = etr;
            this.calls = calls;
            this.voltage = voltage;
            this.scheduledTime = scheduledTime;
    }
}
