import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../entities/user';
import {Router} from '@angular/router';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TestAuthentificationServiceService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient,private router:Router) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
  }
  api_url = environment.path;
  httpOptions = {headers: new HttpHeaders({"Content-Type":"application/json","Access-Control-Allow-Origin":'*'})};

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}



logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('sessionUser');
    localStorage.removeItem('sessionUsername');
    localStorage.removeItem('sessionUserLastname');
    localStorage.removeItem('sessionUserRole');
    localStorage.removeItem('sessionUserId');
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
}
}
