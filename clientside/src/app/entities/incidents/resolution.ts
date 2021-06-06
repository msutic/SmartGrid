export class Resolution {
    cause: string;
    subcause: string;
    constructionType: string;
    material: string;

    constructor(cause: string, subcause: string, constructionType: string, material: string){
        this.cause = cause;
        this.subcause = subcause;
        this.constructionType = constructionType;
        this.material = material;
    }
}
