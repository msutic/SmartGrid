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

  mockedUsers(): Array<User>{
    let users = new Array<User>();

    const user1 = new User('Marko', 'Sutic', 'msuticm@gmail.com', new Date(1997,8,22), 'Mise Dimitrijevica 45a', 'sutke', 'gajdobra');
    user1.userRole = 'admin';
    

    const user2 = new User('Nemanja', 'Kovacevic', 'kovac@gmail.com', new Date(1997,5,25), 'Fontana Bajic', 'kovac', 'gajdobra');
    user2.userRole = 'dispatcher';

    const user3 = new User('Rasa', 'Trudic', 'rasatrudic@gmail.com', new Date(1997,8,22), 'Zivi u centru NS-a', 'rasa', 'pecinci');
    user3.userRole = 'worker';

    const user4 = new User('Miljana', 'Bogunovic', 'milja13m@gmail.com', new Date(1998,3,30), 'Bulevar Evrope 23', 'milja13', 'backopalancanka');
    user4.userRole = 'crewMember';

    users.push(user1);
    users.push(user2);
    users.push(user3);
    users.push(user4);

    return users;
  }
}
