export class SafetydocBasicInfo {
    status: string;
    type: string;
    switchingPlan: string;
    safetyDocType: string;
    dateCreated: Date;
    phoneNo: string;
    crew: string;
    creator: string;
    details: string;
    notes: string;

    constructor(status: string, type: string, switchingPlan: string, safetyDocType: string,
        dateCreated: Date, phoneNo: string, crew: string, creator: string, details: string, notes: string){
            this.status = status;
            this.type = type;
            this.switchingPlan = switchingPlan;
            this.safetyDocType = safetyDocType;
            this.dateCreated = dateCreated;
            this.phoneNo = phoneNo;
            this.crew = crew;
            this.creator = creator;
            this.details = details;
            this.notes = notes;
    }
}
