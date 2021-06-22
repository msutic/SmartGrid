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
  workplanBasicInfo1:BasicInfoWorkplan;
  workplanMultimedia: Array<string>;
  workplanInstructions: Array<Instrukcija>;
  workplanDevices:Array<Device>
  constructor(private ws: WorkplanService, private router: Router, public ns: NotifikacijaserviceService) { }

  ngOnInit(): void {
    this.ws.changeEmitted$.subscribe(
      res => {
        this.workplanBasicInfo1 = res;
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
      var crewIDnumber:number=+this.workplanBasicInfo1.crewId;
      this.newWorkplan=new Workplan(
        this.workplanBasicInfo1.type,
        this.workplanBasicInfo1.status,
        this.workplanBasicInfo1.startDate,
        this.workplanBasicInfo1.endDate,
        crewIDnumber,
        this.workplanBasicInfo1.purpuse,
        this.workplanBasicInfo1.company,
        this.workplanBasicInfo1.order,
        this.workplanBasicInfo1.incidentId,
        this.workplanBasicInfo1.notes,
        this.workplanBasicInfo1.phoneNumber,
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


