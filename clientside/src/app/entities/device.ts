export enum DeviceType {
    PowerSwitch = 'PowerSwitch',
    Fuse = 'Fuse',
    Transformator = 'Transformator',
    Disconnector = 'Disconnector'
}
export class Device {
    type: string;
    id: number;
    name: string;
    address: string;
    x_coordinate: number;
    y_coordinate: number;

    constructor(type: string, address: string, x_coordinate: number, y_coordinate: number){
        this.type = type;
        this.address = address;
        this.x_coordinate = x_coordinate;
        this.y_coordinate = y_coordinate;
    }
}

