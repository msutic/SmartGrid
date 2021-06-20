import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Instrukcija } from '../entities/instrukcija';

@Injectable({
  providedIn: 'root'
})
export class WorkplanService {


  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();

  private emitChangeMultimedia = new Subject<any>();
  changeEmittedMultimedia$ = this.emitChangeMultimedia.asObservable();

  private emitChangeDevices = new Subject<any>();
  changeEmittedDevice$ = this.emitChangeDevices.asObservable();

  private emitChangeInstructions = new Subject<any>();
  changeEmittedInstructions$ = this.emitChangeInstructions.asObservable();



  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  instructions = new Array<Instrukcija>();

  api_url = environment.path;


  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

  multimediaEmitChange(change: any){
    this.emitChangeMultimedia.next(change);
  }

  devicesEmitChange(change: any){
    this.emitChangeDevices.next(change);
  }

  instructionsEmitChange(change: any){
    this.emitChangeInstructions.next(change);
  }
}
