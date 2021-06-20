import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { validate } from 'json-schema';
import { PrioritetLok } from 'src/app/entities/lokacija-prioritet';
import { Podesavanja } from 'src/app/entities/podesavanja';
import { PriorityService } from 'src/app/services/priority.service';
import { SettingsServiceService } from 'src/app/services/settings-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  
  currentpodesavanja:Podesavanja=new Podesavanja(true,true,true,true,true);
  
  
  priorityform:FormGroup;

  streetvalue:String="";
  cityvalue:String="";
  priorityvalue:number;
  isDataLoaded:boolean=false;

  priorlokacija:PrioritetLok;

  constructor(public sss:SettingsServiceService,private fb: FormBuilder, public ps:PriorityService) { 
    
    
  }

  ngOnInit(): void {
    this.sss.getSettings().subscribe(
      res=>{
        this.currentpodesavanja=res;
      }
    )
    this.initializeForm();
    this.isDataLoaded=true;
    
    
   
  }
  SaveSettings():void{
    this.sss.updateSettings(this.currentpodesavanja).subscribe(
      res=>{
          
          window.location.reload();
      }
    )

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
      this.currentpodesavanja.errorvidljive=true;
    }else
    {
      this.currentpodesavanja.errorvidljive=false;
    }
  }
  toggleInfo(event)
  {
    if(event.target.checked)
    {
      this.currentpodesavanja.infovidljive=true;
    }else
    {
      this.currentpodesavanja.infovidljive=false;
    }
  }
  toggleNevidljiva(event)
  {
    if(event.target.checked)
    {
      this.currentpodesavanja.obavezna=false;
    }else
    {
      this.currentpodesavanja.obavezna=true;
    }
  }

  toggleVidljiva(event)
  {
    if(event.target.checked)
    {
      this.currentpodesavanja.obavezna=true;
    }else
    {
      this.currentpodesavanja.obavezna=false;
    }
  }



  toggleWarning(event)
  {
    if(event.target.checked)
    {
      this.currentpodesavanja.warningvidljive=true;
    }else
    {
      this.currentpodesavanja.warningvidljive=false;
    }
  }
  
  toggleSucess(event)
  {
    if(event.target.checked)
    {
      this.currentpodesavanja.successvidljive=true;
    }else
    {
      this.currentpodesavanja.successvidljive=false;
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
