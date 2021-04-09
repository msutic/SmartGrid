import { Injectable } from '@angular/core';
import { Device } from '../entities/device';
import { DeviceType } from '../entities/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: Array<Device>;

  constructor() { }

  loadDevices() {
    console.log('Getting devices...');
    return this.mockedDevices();
  }

  mockedDevices(): Array<Device> {
    let devices = new Array<Device>();

    const d1 = new Device('Transformator','TRA1','device1','adresa 1','x-50,y-67');
    const d2 = new Device('Fuse','FUS1','device2','adresa 2','x-50,y-67');
    const d3 = new Device('PowerSwitch','POW1','device3','adresa 3','x-50,y-67');
    const d4 = new Device('Disconnector','DIS1','device4','adresa 4','x-50,y-67');
    const d5 = new Device('Transformator','TRA2','device5','adresa 5','x-59,y-22');

    devices.push(d1);
    devices.push(d2);
    devices.push(d3);
    devices.push(d4);
    devices.push(d5);

    return devices;
  }
}
