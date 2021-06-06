import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') courseForm: NgForm;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    let users = this.userService.loadUsers();
    users.forEach(element => {
      if(element.email === form.value.email && element.password === form.value.password){
        alert('Success!');
        localStorage.setItem('sessionUser', JSON.stringify(element.userRole));
        this.router.navigate(['dashboard']);
      }
    });
    
  }

}
