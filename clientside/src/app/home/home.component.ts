import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('f') courseForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    alert('Your data. Email: ' + form.value.email + 'Password: ' + form.value.password);
  }

}
