import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') courseForm: NgForm;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    alert('Email: ' + form.value.email + '\nPassword: ' + form.value.password);
    this.router.navigate(['dashboard']);
  }

}
