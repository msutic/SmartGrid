import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Call } from 'src/app/entities/call';
import { Device } from 'src/app/entities/device';
import { Incident } from 'src/app/entities/incident';
import { BasicInfo } from 'src/app/entities/incidents/basic-info';
import { Resolution } from 'src/app/entities/incidents/resolution';
import { Notifikacija } from 'src/app/entities/notifikacija';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  newIncident: Incident;
  incidentBasicInfo: BasicInfo;
  incidentDevicesList: Array<Device>;
  incidentResolution: Resolution;
  incidentCallsList: Array<Call>;
  incidentCrew: string;
  data1: string;
  constructor(private incidentService: IncidentService, private router: Router, public ns: NotifikacijaserviceService) { }

  ngOnInit(): void {
    this.incidentService.changeEmitted$.subscribe(
      res => {
        this.incidentBasicInfo = res;
      }
    )

    this.incidentService.changeEmittedResolution$.subscribe(
      res => {
        this.incidentResolution = res;
      }
    )

    this.incidentService.changeEmittedDevices$.subscribe(
      res => {
        this.incidentDevicesList = res;
      }
    )

    this.incidentService.changeEmittedCalls$.subscribe(
      res => {
        this.incidentCallsList = res;
      }
    )

    this.incidentService.changeEmittedCrew$.subscribe(
      res => {
        this.incidentCrew = res;
      }
    )
  }

  onSubmit(){
    if(this.incidentBasicInfo == null || this.incidentResolution == null
       || this.incidentCrew == null){
    } else {
      this.newIncident = new Incident(
        this.incidentBasicInfo.type,
        this.incidentBasicInfo.priority,
        this.incidentBasicInfo.confirmed,
        this.incidentBasicInfo.status,
        this.incidentBasicInfo.description,
        this.incidentBasicInfo.eta,
        this.incidentBasicInfo.ata,
        this.incidentBasicInfo.outageTime,
        this.incidentBasicInfo.etr,
        this.incidentBasicInfo.affectedConsumers,
        this.incidentBasicInfo.calls,
        this.incidentBasicInfo.voltage,
        this.incidentBasicInfo.scheduledTime,
        this.incidentDevicesList,
        this.incidentResolution.cause,
        this.incidentResolution.subcause,
        this.incidentResolution.constructionType,
        this.incidentResolution.material,
        
        this.incidentCrew,
        1
      );

      this.incidentService.addNewIncident(this.newIncident).subscribe(
        (res) => {
          this.router.navigate(['incidents']);
        }
      );

      this.ns.addNewNotification(new Notifikacija("info","incident uspesno dodat",new Date(Date.now()))).subscribe(
        (res) => {
          this.router.navigate(['incidents']);
        }
      );

    }
  }



}
