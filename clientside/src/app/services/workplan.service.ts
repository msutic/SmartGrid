import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Instrukcija } from '../entities/instrukcija';
import { Workplan } from '../entities/workplan';

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

  loadWorkplans():Observable<any>{
    return this.http.get<any>(this.api_url+'Workplans', this.httpOptions);
  }

  addNewWorkplan(newWorkplan: Workplan):Observable<any>{
    console.log('Adding new Workplan...')
    return this.http.post<any>(this.api_url+'Workplans/addWorkplan', JSON.stringify(newWorkplan), this.httpOptions);
  }

  deleteWorkplan(id:number){
    console.log('Deleting Workplan with id: ' + id);
    return this.http.delete(this.api_url+'Workplans/deleteWorkplan/'+id,this.httpOptions);
  }

  updateWorkplanInstruktions(workplan:Workplan):Observable<any>
  {
    console.log("Executing instructions...");
    return this.http.put(this.api_url+"Workplans/updateWorkplanInstructions",JSON.stringify(workplan),this.httpOptions);
  }

  approveWorkplan(workplan:Workplan):Observable<any>{
    console.log("Approving workplan...");
    return this.http.put(this.api_url+"Workplans/approveWorkplan",JSON.stringify(workplan),this.httpOptions);
  }




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
