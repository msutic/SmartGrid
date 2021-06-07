export class Safetydoc {
    id: number;
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

    //list devices
    workOperationsCompleted: boolean;
    tagsRemoved: boolean;
    groundingRemoved: boolean;
    readyForService: boolean

    constructor(status: string, type: string, switchingPlan: string, safetyDocType: string,
        dateCreated: Date, phoneNo: string, crew: string, creator: string, details: string, notes: string,
        workOperationsCompleted: boolean, tagsRemoved: boolean, groundingRemoved: boolean, readyForService: boolean){
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

            this.workOperationsCompleted = workOperationsCompleted;
            this.tagsRemoved = tagsRemoved;
            this.groundingRemoved = groundingRemoved;
            this.readyForService = readyForService;
    }
}
