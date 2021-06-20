import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import {User} from 'src/app/entities/user';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { Podesavanja } from 'src/app/entities/podesavanja';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import { ZahteviService } from 'src/app/services/zahtevi.service';
import { Promenauloge } from 'src/app/entities/promenauloge';
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
  Password:string;
  user:User;
  userid:string=localStorage.getItem('sessionUserId');
  useridnumber:number=+this.userid;
  Datum:Date;
  DatumString:string;
  newUser:User;
  podesavanja:Podesavanja=new Podesavanja(true,true,true,true,true);
  zahtev:Promenauloge=new Promenauloge(1,"a","a","b");
  editUserFormGroup:FormGroup;

  //Date: Date;
  
  constructor(public us:UserService,public ss:SettingsServiceService,public zs:ZahteviService) {
    this.us.getUser(this.userid).subscribe(
      (res: any) => {
        this.user = res;
        this.createForm();
        this.ss.getSettings().subscribe(
          res=>{
                this.podesavanja=res;
          }
        )
      }
    )

  

   }

  ngOnInit(): void {
    
    this.color="transparent";
    this.isDivVisible = false;
    

    
    
  }

  createForm(){
    this.DatumString=this.user.birthDate.toString();
    this.editUserFormGroup = new FormGroup({
      "username": new FormControl(this.user.username,Validators.required),
      "name":new FormControl(this.user.name,Validators.required),
      "lastname":new FormControl(this.user.lastName,Validators.required),
      "address":new FormControl(this.user.address),
      "email":new FormControl(this.user.email,Validators.required),
      "password":new FormControl(this.user.password,Validators.required),
      "date":new FormControl(this.user.birthDate),
      "role":new FormControl(this.user.userRole)
      
    });
  }








  edit(): void
  {
    this.isDivVisible=true;
    this.color="white";
  }
  confirm(): void
  {
    this.newUser=new User(this.editUserFormGroup.value.name,this.editUserFormGroup.value.lastname,this.editUserFormGroup.value.email,this.editUserFormGroup.value.date,this.editUserFormGroup.value.address,this.editUserFormGroup.value.username,this.editUserFormGroup.value.password);
    this.newUser.id=this.useridnumber;
    this.newUser.userRole=this.user.userRole;
    this.us.updateUser(this.newUser).subscribe(
      res=>{
        localStorage.setItem('currentUser', JSON.stringify(this.newUser));
        localStorage.setItem('sessionUser', JSON.stringify(this.newUser.userRole));
        localStorage.setItem('sessionUsername', JSON.stringify(this.newUser.username));
        localStorage.setItem('sessionUserLastname', JSON.stringify(this.newUser.lastName));
        localStorage.setItem('sessionUserRole', JSON.stringify(this.newUser.userRole));
        localStorage.setItem('sessionUserId',JSON.stringify(this.newUser.id));

        if(this.editUserFormGroup.value.role !== this.newUser.userRole)
        {
          
        this.zahtev.idkorisnika=this.newUser.id;
        this.zahtev.korisnickoime=this.newUser.username;
        this.zahtev.novauloga=this.editUserFormGroup.value.role;
        this.zahtev.starauloga=this.newUser.userRole;


        this.zs.addZahtev(this.zahtev).subscribe(
          res=>{
            
          }
        )
        }
        window.location.reload();

        
      }
    )
    
  }

  cancel(): void
  {
    this.editUserFormGroup.get("username").setValue(this.user.username);
    this.editUserFormGroup.get("name").setValue(this.user.name);
    this.editUserFormGroup.get("lastname").setValue(this.user.lastName);
    this.editUserFormGroup.get("address").setValue(this.user.address);
    this.editUserFormGroup.get("email").setValue(this.user.email);
    this.editUserFormGroup.get("password").setValue(this.user.password);
    this.editUserFormGroup.get("date").setValue(this.user.birthDate);
    this.editUserFormGroup.get("role").setValue(this.user.userRole);
    this.isDivVisible=false;
    this.color="transparent";
  }

  get profileControls(): any {
    return this.editUserFormGroup['controls'];
 }

}
