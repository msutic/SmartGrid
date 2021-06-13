import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isDivVisible: boolean;
  color: string;
  UserName: string;
  FirstName: string;
  LastName: string;
  Address: string;
  Email: string;
  //Date: Date;
  
  constructor() {
    
   }

  ngOnInit(): void {
    
    this.color="transparent";
    this.UserName="Username";
    this.FirstName="First Name";
    this.LastName="Last Name";
    this.Address="Address";
    this.Email="Email";
    this.isDivVisible = false;
    //this.Date= new Date("Jan 01 2021");
  }

  edit(): void
  {
    this.isDivVisible=true;
    this.color="white";
  }
  confirm(): void
  {
    this.UserName="Username";
    this.FirstName="First Name";
    this.LastName="Last Name";
    this.Address="Address";
    this.Email="Email";
    this.isDivVisible=false;
    this.color="transparent";
    
  }

  cancel(): void
  {
    this.UserName="Username";
    this.FirstName="First Name";
    this.LastName="Last Name";
    this.Address="Address";
    this.Email="Email";
    this.isDivVisible=false;
    this.color="transparent";
  }

}
