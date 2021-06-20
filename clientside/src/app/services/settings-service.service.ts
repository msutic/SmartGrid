import { Injectable } from '@angular/core';
import { Podesavanja } from '../entities/podesavanja';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {
  constructor(private http:HttpClient) { 
  }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  api_url = environment.path;




  updateSettings(newSettings:Podesavanja):Observable<any>{
    console.log("Changing settings...");
    return this.http.put(this.api_url+"Settings/updateSettings",JSON.stringify(newSettings),this.httpOptions);
  }

  getSettings():Observable<any>{
    console.log("Getting settings...");
    return this.http.get(this.api_url+"Settings",this.httpOptions);
  }
}
