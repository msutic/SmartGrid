export class Call {
    reason: string;
    comment: string;
    hazard: string;
    address: string;

    constructor(reason: string, comment: string = '', hazard: string, address: string){
        this.reason = reason;
        this.comment = comment;
        this.hazard = hazard;
        this.address = address;
    }
}
