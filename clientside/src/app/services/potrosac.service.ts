import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Potrosac } from '../entities/potrosac';

@Injectable({
  providedIn: 'root'
})
export class PotrosacService {

  constructor(private http:HttpClient) { }

  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  api_url = environment.path;


  AddPotrosac(potrosac:Potrosac):Observable<any>{
    console.log("adding consumer: "+potrosac.ime+" "+potrosac.prezime);
    return this.http.post<any>(this.api_url+'Potrosaci/addPotrosac',JSON.stringify(potrosac),this.httpOptions);
  }

}
