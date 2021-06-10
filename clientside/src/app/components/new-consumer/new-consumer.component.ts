import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  
  valueName:String="";
  valueLastname:String="";
  valueStreet:String="";
  valueCity:String="";
  valuePostalcode:number;
  valuePhonenumber:String="";
  valueType:String="";
  consumerForm:FormGroup;
  selected="";
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
    this.selected="option1";
  }
  
  initializeForm():void
  {
    this.consumerForm=this.fb.group({
      name:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      postalcode: new FormControl('',Validators.min(0)),
      phonenumber: new FormControl(''),
      type:new FormControl('',Validators.required)
    });
  }
  onSubmit():void{
    console.log(this.consumerForm.value);
  }
  get consumerControls(): any {
    return this.consumerForm['controls'];
 }

}
