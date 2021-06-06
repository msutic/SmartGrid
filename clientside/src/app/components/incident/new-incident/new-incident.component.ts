import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/entities/incident';
import { BasicInfo } from 'src/app/entities/incidents/basic-info';
import { Resolution } from 'src/app/entities/incidents/resolution';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.css']
})
export class NewIncidentComponent implements OnInit {

  newIncident: Incident;
  incidentBasicInfo: BasicInfo;
  incidentResolution: Resolution;
  data1: string;
  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.incidentService.changeEmitted$.subscribe(
      res => {
        this.incidentBasicInfo = res;
        console.log(this.incidentResolution);
      }
    )

    this.incidentService.changeEmittedResolution$.subscribe(
      res => {
        this.incidentResolution = res;
      }
    )
  }



}
