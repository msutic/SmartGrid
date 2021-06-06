export class BasicInfo {
    type: string;
    priority: number;
    confirmed: boolean;
    status: string;
    description: string;
    eta: string;
    ata: string;
    affectedCustomers: number;
    outageTime: string;
    etr: string;
    calls: number;
    voltage: number;
    scheduledTime: string;

    constructor(type: string, priority: number = 2, confirmed: boolean, status: string,
        description: string, eta: string, ata: string, affectedCustomers: number, outageTime: string, etr: string,
        calls: number, voltage: number, scheduledTime: string){
            this.type = type;
            this.priority = priority;
            this.confirmed = confirmed;
            this.status = status;
            this.description = description;
            this.eta = eta;
            this.ata = ata;
            this.affectedCustomers = affectedCustomers;
            this.outageTime = outageTime;
            this.etr = etr;
            this.calls = calls;
            this.voltage = voltage;
            this.scheduledTime = scheduledTime;
    }
}
