import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { TestAuthentificationServiceService } from 'src/app/services/test-authentification-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') courseForm: NgForm;

  constructor(private tass:TestAuthentificationServiceService,public router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    let users = this.userService.loadUsers().subscribe(
      res=>{
        res.forEach(element => {
          if(element.email===form.value.email && element.password===form.value.password){
            localStorage.setItem('currentUser', JSON.stringify(element));
            localStorage.setItem('sessionUser', JSON.stringify(element.userRole));
            localStorage.setItem('sessionUsername', JSON.stringify(element.name));
            localStorage.setItem('sessionUserLastname', JSON.stringify(element.lastName));
            localStorage.setItem('sessionUserRole', JSON.stringify(element.userRole));
            this.tass.currentUserSubject.next(element);
            
            alert("Successful login");
            this.router.navigate(['dashboard']);
            
          }
          
        });
        
      }
    );
    
  }

}
