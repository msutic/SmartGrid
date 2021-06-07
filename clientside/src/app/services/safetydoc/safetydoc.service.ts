import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Safetydoc } from 'src/app/entities/safetydocs/safetydoc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SafetydocService {

  private emitChangeBasicInfo = new Subject<any>();
  changeEmittedBasicInfo$ = this.emitChangeBasicInfo.asObservable();

  private emitChangeDevices = new Subject<any>();
  changeEmittedDevices$ = this.emitChangeDevices.asObservable();

  private emitChangeChecklist = new Subject<any>();
  changeEmittedChecklist$ = this.emitChangeChecklist.asObservable();

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  api_url = environment.path;

  loadSafetydocs():Observable<any>{
    return this.http.get<any>(this.api_url+'safetydocs', this.httpOptions);
  }

  addNewSafetydoc(safetydoc: Safetydoc){
    console.log('adding new safetydoc...');
    return this.http.post<any>(this.api_url+'safetydocs/addSafetydoc', JSON.stringify(safetydoc), this.httpOptions);
  }

  deleteSafetydoc(safetydoc: Safetydoc){
    console.log('deleting safetydoc...');
    return this.http.delete(this.api_url+'safetydocs/deleteSafetydoc/'+safetydoc.id);
  }

  basicInfoEmitChange(change: any){
    this.emitChangeBasicInfo.next(change);
  }

  devicesEmitChange(change: any){
    this.emitChangeDevices.next(change);
  }

  checklistEmitChange(change: any){
    this.emitChangeChecklist.next(change);
  }

}

