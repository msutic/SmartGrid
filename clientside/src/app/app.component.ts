import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TestAuthentificationServiceService } from './services/test-authentification-service.service';
import {User} from '../app/entities/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientside';
  currentUser: User;
  
  isLoggedin:boolean=false;
  constructor( private router:Router,private authenticationService:TestAuthentificationServiceService)
  {
    
    this.authenticationService.currentUser.subscribe(x=>this.currentUser=x);

  }
  
  logout()
  {
    this.authenticationService.logout();
    
  }

  /*
  isloggedin():boolean
  {
    if(!this.currentUser.username)
    {
      alert("User undefined");
      return false;
    }else
    {
      alert("User defined");
      return true;
    }
  }
  */
}


