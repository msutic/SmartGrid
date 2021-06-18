import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { validate } from 'json-schema';
import { PrioritetLok } from 'src/app/entities/lokacija-prioritet';
import { PriorityService } from 'src/app/services/priority.service';
import { SettingsServiceService } from 'src/app/services/settings-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  vidljiva:boolean=true;
  errorvisible:boolean=true;
  infovisible:boolean=true;
  warningvisible:boolean=true;
  sucessvisible:boolean=true;
  priorityform:FormGroup;

  streetvalue:String="";
  cityvalue:String="";
  priorityvalue:number;

  priorlokacija:PrioritetLok;

  constructor(public sss:SettingsServiceService,private fb: FormBuilder, public ps:PriorityService) { 
    

  }

  ngOnInit(): void {
    this.initializeForm();
   
  }
  SaveSettings():void{
    this.sss.nonrequiredvisible=this.vidljiva;
    this.sss.errorsvisible=this.errorvisible;
    this.sss.infosvisible=this.infovisible;
    this.sss.warrningsvisible=this.warningvisible;
    this.sss.successesvisible=this.sucessvisible;

  }
  initializeForm():void
  {
    this.priorityform=this.fb.group({
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      priority:new FormControl('',Validators.compose([Validators.required,Validators.min(0),Validators.max(3)]))
      
    });
  }


  toggleError(event)
  {
    if(event.target.checked)
    {
      this.errorvisible=true;
    }else
    {
      this.errorvisible=false;
    }
  }
  toggleInfo(event)
  {
    if(event.target.checked)
    {
      this.infovisible=true;
    }else
    {
      this.infovisible=false;
    }
  }
  toggleWarning(event)
  {
    if(event.target.checked)
    {
      this.warningvisible=true;
    }else
    {
      this.warningvisible=false;
    }
  }
  
  toggleSucess(event)
  {
    if(event.target.checked)
    {
      this.sucessvisible=true;
    }else
    {
      this.sucessvisible=false;
    }
  }

  onSubmit()
  {
    this.priorlokacija=new PrioritetLok(this.streetvalue,this.cityvalue,this.priorityvalue);
    alert(this.priorlokacija.Ulica+" "+this.priorlokacija.Grad+" "+this.priorlokacija.Prioritet);
    this.ps.addPriority(this.priorlokacija).subscribe(
      (res)=>{
        window.location.reload();
      }
    )
  }

  get priorityControls(): any {
    return this.priorityform['controls'];
 }

}
