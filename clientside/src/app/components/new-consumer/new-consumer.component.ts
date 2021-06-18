import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Potrosac } from 'src/app/entities/potrosac';
import { PotrosacService } from 'src/app/services/potrosac.service';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  potrosac:Potrosac;
  valueName:String="";
  valueLastname:String="";
  valueStreet:String="";
  valueCity:String="";
  valuePostalcode:number;
  valuePhonenumber:String="";
  valueType:String="";
  consumerForm:FormGroup;
  selected="";
  constructor(private fb: FormBuilder,public sss:SettingsServiceService, public ps:PotrosacService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.selected="Komercijalni";
  }
  
  initializeForm():void
  {
    this.consumerForm=this.fb.group({
      name:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      postalcode: new FormControl('',),
      phonenumber: new FormControl(''),
      type:new FormControl('',Validators.required)
    });
  }
  onSubmit():void{
    console.log(this.consumerForm.value);
    this.potrosac=new Potrosac(this.consumerForm.value.name,this.consumerForm.value.lastName,this.consumerForm.value.street,this.consumerForm.value.city,this.consumerForm.value.type,this.consumerForm.value.phonenumber,this.consumerForm.value.postalcode);
    //alert(this.consumerForm.value.type);
   
    alert(this.potrosac.ime+" "+this.potrosac.prezime+" "+this.potrosac.ulica+" "+this.potrosac.grad+" "+this.potrosac.tip+" "+this.potrosac.broj_telefona+" "+this.potrosac.postanski_broj);
    this.ps.AddPotrosac(this.potrosac).subscribe(
      res=>{
        
      }
    )


  }
  get consumerControls(): any {
    return this.consumerForm['controls'];
 }

}
