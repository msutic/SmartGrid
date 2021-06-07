export class SafetydocChecklist {
    workOperationsCompleted: boolean;
    tagsRemoved: boolean;
    groundingRemoved: boolean;
    readyForService: boolean;

    constructor(workOperationsCompleted: boolean, tagsRemoved: boolean,
        groundingRemoved: boolean, readyForService: boolean){
            this.workOperationsCompleted = workOperationsCompleted;
            this.tagsRemoved =tagsRemoved;
            this.groundingRemoved = groundingRemoved;
            this.readyForService = readyForService;
        }
}
