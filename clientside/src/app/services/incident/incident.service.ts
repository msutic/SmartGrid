import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Incident } from 'src/app/entities/incident';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  private emitChangeDevices = new Subject<any>();
  changeEmittedDevices$ = this.emitChangeDevices.asObservable();

  private emitChangeResolution = new Subject<any>();
  changeEmittedResolution$ = this.emitChangeResolution.asObservable();

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  incidents = new Array<Incident>();
  api_url = environment.path;

  loadIncidents():Observable<any>{
    return this.http.get<any>(this.api_url+'incidents', this.httpOptions);
  }

  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

  resolutionEmitChange(change: any){
    this.emitChangeResolution.next(change);
  }

  devicesEmitChange(change: any){
    this.emitChangeDevices.next(change);
  }

}
