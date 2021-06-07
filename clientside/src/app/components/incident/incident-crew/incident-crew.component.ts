import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-incident-crew',
  templateUrl: './incident-crew.component.html',
  styleUrls: ['./incident-crew.component.css']
})
export class IncidentCrewComponent implements OnInit {

  crewForm: FormGroup;
  crewName: string;
  constructor(private incidentService: IncidentService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.crewForm = new FormGroup({
      'crew': new FormControl()
    });
  }

  onSave(){
    this.crewName = this.crewForm.value.crew;
    if(this.crewName == null)
      alert("You must select crew for this incident");
    else
      this.incidentService.crewEmitChange(this.crewName);
  }

}
