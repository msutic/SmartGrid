import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PrioritetLok } from '../entities/lokacija-prioritet';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  api_url = environment.path;

  addPriority( lp:PrioritetLok):Observable<any>{
    console.log("adding priority {0} for street:{1} in city:{2}",lp.Prioritet,lp.Ulica,lp.Grad);
    var x=JSON.stringify(lp);
    return this.http.post<any>(this.api_url+'PrioritetiLokacija/addPriority', JSON.stringify(lp), this.httpOptions);
  }
}
