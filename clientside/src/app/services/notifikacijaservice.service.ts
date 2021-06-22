import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Notifikacija} from '../entities/notifikacija';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NotifikacijaserviceService {

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  notifikacije=new Array<Notifikacija>();
  api_url = environment.path;

  loadNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications', this.httpOptions);
  }
  addNewNotification(newNotification: Notifikacija):Observable<any>{
    console.log('Adding new Notification...')
    return this.http.post<any>(this.api_url+'notifications/addNotification', JSON.stringify(newNotification), this.httpOptions);
  }
  loadUnreadNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications/unreadNotifications',this.httpOptions);
  }

  loadInfoNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications/infoNotifications',this.httpOptions);
  }

  loadErrorNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications/errorNotifications',this.httpOptions);
  }

  loadWarningNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications/warningNotifications',this.httpOptions);
  }
  
  loadSuccessNotifikations():Observable<any>{
    return this.http.get<any>(this.api_url+'notifications/successNotifications',this.httpOptions);
  }

  ReadNotification(notifikacija: Notifikacija){
    console.log('reading notification with id: ' + notifikacija.id);
    return this.http.put(this.api_url+'Notifications/readNotification/'+notifikacija.id,JSON.stringify(notifikacija), this.httpOptions);
  }

  DeleteNotification(notifikacija:Notifikacija){
    console.log('deleting notification with id: '+notifikacija.id);
    return this.http.delete(this.api_url+'Notifications/deleteNotification/'+notifikacija.id);
  }

  


}
