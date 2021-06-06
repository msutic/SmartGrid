import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Call } from 'src/app/entities/call';
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

  private emitChangeCalls = new Subject<any>();
  changeEmittedCalls$ = this.emitChangeCalls.asObservable();

  private emitChangeCrew = new Subject<any>();
  changeEmittedCrew$ = this.emitChangeCrew.asObservable();

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  incidents = new Array<Incident>();
  incidentCalls = new Array<Call>(); 
  api_url = environment.path;

  loadIncidents():Observable<any>{
    return this.http.get<any>(this.api_url+'incidents', this.httpOptions);
  }

  addNewIncident(newIncident: Incident):Observable<any>{
    console.log('Adding new Incident...')
    return this.http.post<any>(this.api_url+'incidents/addIncident', JSON.stringify(newIncident), this.httpOptions);
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

  callsEmitChange(change: any){
    this.emitChangeCalls.next(change);
  }

  loadIncidentCalls(){
    console.log('Getting incident calls...');
    return this.incidentCalls;
  }

  // mockedIncidentCalls(){
  //   const call1 = new Call(1234,"Nema struje", 'Ne znam sto nema', 'otisla struja', 'Mise Dimitrijevica 45a');
  //   const call2 = new Call(4455, 'Nema vode', 'Ne znam sto je nema', 'zedni smo', 'Fruskogorska 9');

  //   this.incidentCalls.push(call1);
  //   this.incidentCalls.push(call2);

  //   return this.incidentCalls;
  // }

  addNewIncidentCall(call: Call){
    this.incidentCalls.push(call);
  }

  crewEmitChange(change: any){
    this.emitChangeCrew.next(change);
  }

  deleteIncident(incident: Incident){
    console.log('deleting incident... ID: ' + incident.id);
    return this.http.delete(this.api_url+'incidents/deleteIncident/'+incident.id);
  }

}
