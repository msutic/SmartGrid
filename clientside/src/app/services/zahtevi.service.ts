import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Promenauloge } from '../entities/promenauloge';

@Injectable({
  providedIn: 'root'
})
export class ZahteviService {

  constructor(private http:HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  api_url = environment.path;

  getZahtevi(){
    console.log("getting requests for role changes...");
    return this.http.get(this.api_url+"Zahtevi",this.httpOptions);
  }

  addZahtev(promenauloge:Promenauloge){
    console.log("adding request for role change...");
    return this.http.post(this.api_url+"Zahtevi/addZahtev",JSON.stringify(promenauloge),this.httpOptions);
  }

  approveZahtev(id:number):Observable<any>{
    console.log("approving request for role change...");
    return this.http.delete(this.api_url+"Zahtevi/approveZahtev/"+id.toString(),this.httpOptions);
    
  }

  denyZahtev(id:number):Observable<any>{
    console.log("denying request for role change...");
    return this.http.delete(this.api_url+"Zahtevi/denyZahtev/"+id.toString(),this.httpOptions);
  }



}
