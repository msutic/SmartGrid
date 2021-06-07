import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientside';

  username = JSON.parse(localStorage.getItem('sessionUsername'));

  constructor(private router: Router){}

  logout(){
    if(localStorage.length > 0) {
      localStorage.removeItem('sessionUser');
      localStorage.removeItem('sessionUsername');
      localStorage.removeItem('sessionUserLastname');
      localStorage.removeItem('sessionUserRole');
      alert('Successfully logged out!');
      this.router.navigate(['/home']);
    }
  }

  checkLogin(){
    let username = localStorage.getItem("sessionUsername");
    if(username != null){
      alert("You are logged in as " + JSON.parse(username) + '\nRole: ' + JSON.parse(localStorage.getItem('sessionUserRole')));
    } else {
      alert('You are not logged in.');
    }
  }
}


