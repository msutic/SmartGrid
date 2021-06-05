import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Incident } from 'src/app/entities/incident';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  incidents = new Array<Incident>();
  api_url = environment.path;

  loadIncidents():Observable<any>{
    return this.http.get<any>(this.api_url+'incidents', this.httpOptions);
  }
}
