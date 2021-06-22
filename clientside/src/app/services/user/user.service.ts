import { Injectable } from '@angular/core';
import { User } from 'src/app/entities/user';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http:HttpClient) { }
  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};
  users = new Array<User>();
  api_url = environment.path;

  loadUsers():Observable<any>{
    console.log('Getting users...');
    return this.http.get<any>(this.api_url+'Users', this.httpOptions);
  }

  getUser(id:string):Observable<any>{
    console.log("Getting user info...");
    return this.http.get<any>(this.api_url+'Users/'+id,this.httpOptions);
  }

  updateUser(user:User):Observable<any>{
    console.log("Updating info...");
    return this.http.put(this.api_url+'Users/updateUser', JSON.stringify(user), this.httpOptions);
    
  }
}
