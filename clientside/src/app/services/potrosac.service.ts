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

  loadPotrosaci() {
    console.log('Getting potrosaci...');
    return this.http.get<any>(this.api_url+'Potrosaci', this.httpOptions);
  }

  deletePotrosac(potrosac: Potrosac){
    console.log('deleting consumer with id ' + potrosac.id);
    return this.http.delete(this.api_url+'Potrosaci/deletePotrosac/'+potrosac.id);
  }

  getPotrosac(id: number):Observable<any>{
    console.log('getting potrosac...')
    return this.http.get<any>(this.api_url+'potrosaci/' + id.toString(), this.httpOptions);
  }

  updatePotrosac(potrosac: Potrosac){
    console.log('updating potrosac with id: ' + potrosac.id);
    return this.http.put(this.api_url+'potrosaci/updatePotrosac', JSON.stringify(potrosac), this.httpOptions);
  }

}
