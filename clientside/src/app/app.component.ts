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
    alert("Logout pressed");
    this.authenticationService.logout();
    this.router.navigate(['/home']);
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


