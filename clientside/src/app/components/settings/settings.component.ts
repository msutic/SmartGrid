import { Component, OnInit } from '@angular/core';
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
  constructor(private sss:SettingsServiceService) { 
    

  }

  ngOnInit(): void {
    
   
  }
  SaveSettings():void{
    this.sss.nonrequiredvisible=this.vidljiva;
    this.sss.errorsvisible=this.errorvisible;
    this.sss.infosvisible=this.infovisible;
    this.sss.warrningsvisible=this.warningvisible;
    this.sss.successesvisible=this.sucessvisible;

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

}
