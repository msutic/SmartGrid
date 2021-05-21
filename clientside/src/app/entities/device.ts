export enum DeviceType {
    PowerSwitch = 'PowerSwitch',
    Fuse = 'Fuse',
    Transformator = 'Transformator',
    Disconnector = 'Disconnector'
}
export class Device {
    type: string;
    id: string;
    name: string;
    address: string;
    coordinates: string;

    constructor(type: string, id: string, name: string, address: string, coordinates: string){
        this.type = type;
        this.id = id;
        this.name = name;
        this.address = address;
        this.coordinates = coordinates;
    }
}

