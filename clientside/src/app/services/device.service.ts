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
}
