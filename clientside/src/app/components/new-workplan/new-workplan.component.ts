import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicInfoWorkplan } from 'src/app/entities/basic-info-workplan';
import { Call } from 'src/app/entities/call';
import { Device } from 'src/app/entities/device';
import { Incident } from 'src/app/entities/incident';
import { BasicInfo } from 'src/app/entities/incidents/basic-info';
import { Resolution } from 'src/app/entities/incidents/resolution';
import { Instrukcija } from 'src/app/entities/instrukcija';
import { Notifikacija } from 'src/app/entities/notifikacija';
import { Workplan } from 'src/app/entities/workplan';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';
import { WorkplanService } from 'src/app/services/workplan.service';

@Component({
  selector: 'app-new-workplan',
  templateUrl: './new-workplan.component.html',
  styleUrls: ['./new-workplan.component.css']
})
export class NewWorkplanComponent implements OnInit {
  newWorkplan: Workplan;
  workplanBasicInfo: BasicInfoWorkplan=new BasicInfoWorkplan("a","a",new Date(Date.now()),new Date(Date.now()),1,"a","a","a",1,"a","a");
  workplanMultimedia: Array<string>;
  workplanInstructions: Array<Instrukcija>;
  workplanDevices:Array<Device>
  constructor(private ws: WorkplanService, private router: Router, public ns: NotifikacijaserviceService) { }

  ngOnInit(): void {
    this.ws.changeEmitted$.subscribe(
      res => {
        this.newWorkplan = res;
      }
    )

    this.ws.changeEmittedDevice$.subscribe(
      res => {
        this.workplanDevices = res;
      }
    )
    

    this.ws.changeEmittedInstructions$.subscribe(
      res => {
        this.workplanInstructions = res;
      }
    )

    this.ws.changeEmittedMultimedia$.subscribe(
      res => {
        this.workplanMultimedia = res;
      }
    )
  }
    onSubmit(){
      this.newWorkplan=new Workplan(
        this.workplanBasicInfo.type,
        this.workplanBasicInfo.status,
        this.workplanBasicInfo.startDate,
        this.workplanBasicInfo.endDate,
        this.workplanBasicInfo.crewId,
        this.workplanBasicInfo.purpuse,
        this.workplanBasicInfo.company,
        this.workplanBasicInfo.order,
        this.workplanBasicInfo.incidentId,
        this.workplanBasicInfo.notes,
        this.workplanBasicInfo.phoneNumber,
        JSON.stringify(this.workplanMultimedia),
        JSON.stringify(this.workplanInstructions),
        JSON.stringify(this.workplanDevices)
      );

      this.ws.addNewWorkplan(this.newWorkplan).subscribe(
        res=>{

        }
      )
    }
       
    }


