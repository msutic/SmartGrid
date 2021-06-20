import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Potrosac } from 'src/app/entities/potrosac';
import { PotrosacService } from 'src/app/services/potrosac.service';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Podesavanja } from 'src/app/entities/podesavanja';
@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnInit {
  potrosacId: string = '';
  edit: boolean;
  id:number;
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
  podesavanja:Podesavanja=new Podesavanja(true,true,true,true,true);
  constructor(private router:Router,private fb: FormBuilder,public sss:SettingsServiceService, public ps:PotrosacService,private route: ActivatedRoute) 
  { 
    this.sss.getSettings().subscribe(
      res=>{
        this.podesavanja=res;
      }
    )
  }

  ngOnInit(): void {
    /*
    this.initializeForm();
    this.selected="Komercijalni";
    */
    this.potrosacId = this.route.snapshot.paramMap.get("id");
    if(this.potrosacId != null){
      this.edit = true;
      this.ps.getPotrosac(+this.potrosacId).subscribe(
        (res: any) => {
          this.potrosac = res;
          this.createForm();
        }
      )
    }else {
      this.edit = false;
    }
    this.initializeForm();
   
  }

  createForm(){
    this.consumerForm=this.fb.group({
      name:new FormControl(this.potrosac.ime,Validators.required),
      lastName:new FormControl(this.potrosac.prezime,Validators.required),
      street:new FormControl(this.potrosac.ulica,Validators.required),
      city:new FormControl(this.potrosac.grad,Validators.required),
      postalcode: new FormControl(this.potrosac.postanski_broj),
      phonenumber: new FormControl(this.potrosac.broj_telefona),
      type:new FormControl(this.potrosac.tip,Validators.required)
    });
    this.id=this.potrosac.id;
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
    if(this.edit)
    {
      this.potrosac=new Potrosac(this.consumerForm.value.name,this.consumerForm.value.lastName,this.consumerForm.value.street,this.consumerForm.value.city,this.consumerForm.value.type,this.consumerForm.value.phonenumber,this.consumerForm.value.postalcode);
      this.potrosac.id=this.id;
      this.ps.updatePotrosac(this.potrosac).subscribe(
        (res)=>{
          this.router.navigate(['potrosaci']);

        }
      )
    }else
    {
      console.log(this.consumerForm.value);
    this.potrosac=new Potrosac(this.consumerForm.value.name,this.consumerForm.value.lastName,this.consumerForm.value.street,this.consumerForm.value.city,this.consumerForm.value.type,this.consumerForm.value.phonenumber,this.consumerForm.value.postalcode);
    //alert(this.consumerForm.value.type);
   
    alert(this.potrosac.ime+" "+this.potrosac.prezime+" "+this.potrosac.ulica+" "+this.potrosac.grad+" "+this.potrosac.tip+" "+this.potrosac.broj_telefona+" "+this.potrosac.postanski_broj);
    this.ps.AddPotrosac(this.potrosac).subscribe(
      (res)=>{
        this.router.navigate(['potrosaci']);
        
      }
    )
    }

    


  }
  get consumerControls(): any {
    return this.consumerForm['controls'];
 }

}
