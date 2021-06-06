import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientside';

  logout(){
    if(localStorage.length > 0) {
      localStorage.removeItem('sessionUser');
      alert('Successfully logged out!');
    }
  }
}


