import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Device } from '../entities/device';
import { DeviceType } from '../entities/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http:HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  devices = new Array<Device>();
  api_url = environment.path;

  loadDevices() {
    console.log('Getting devices...');
    //return this.mockedDevices();
    //this.devices=this.http.get<any>(this.api_url+'Devices', this.httpOptions))
    return this.http.get<any>(this.api_url+'Devices', this.httpOptions);
  }

  addNewDevice(newDevice: Device): Observable<any>{
    console.log('Adding new device...');
    return this.http.post<any>(this.api_url+'devices/addDevice', JSON.stringify(newDevice), this.httpOptions);
  }

  getDevice(id: number):Observable<any>{
    console.log('getting device...')
    return this.http.get<any>(this.api_url+'devices/' + id.toString(), this.httpOptions);
  }

  updateDevice(device: Device){
    console.log('updating device with id: ' + device.id);
    return this.http.put(this.api_url+'devices/updateDevice/'+device.id, JSON.stringify(device), this.httpOptions);
  }

  deleteDevice(device: Device){
    console.log('deleting device with id ' + device.id);
    return this.http.delete(this.api_url+'devices/deleteDevice/'+device.id);
  }

  // mockedDevices(): Array<Device> {
  //   let devices = new Array<Device>();

  //   const d1 = new Device('Transformator','TRA1','device1','adresa 1','x-50,y-67');
  //   const d2 = new Device('Fuse','FUS1','device2','adresa 2','x-50,y-67');
  //   const d3 = new Device('PowerSwitch','POW1','device3','adresa 3','x-50,y-67');
  //   const d4 = new Device('Disconnector','DIS1','device4','adresa 4','x-50,y-67');
  //   const d5 = new Device('Transformator','TRA2','device5','adresa 5','x-59,y-22');

  //   devices.push(d1);
  //   devices.push(d2);
  //   devices.push(d3);
  //   devices.push(d4);
  //   devices.push(d5);

  //   return devices;
  // }
}
