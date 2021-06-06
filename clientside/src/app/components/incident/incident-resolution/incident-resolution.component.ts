import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Resolution } from 'src/app/entities/incidents/resolution';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-incident-resolution',
  templateUrl: './incident-resolution.component.html',
  styleUrls: ['./incident-resolution.component.css']
})
export class IncidentResolutionComponent implements OnInit {

  resolutionForm: FormGroup;
  newResolution: Resolution;
  constructor(private incidentService: IncidentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.resolutionForm = new FormGroup({
      'cause': new FormControl(),
      'subcause': new FormControl(),
      'constructionType': new FormControl(),
      'material': new FormControl()
    })
  }

  onSaveClick(){
    this.newResolution = new Resolution(
      this.resolutionForm.value.cause,
      this.resolutionForm.value.subcause,
      this.resolutionForm.value.constructionType,
      this.resolutionForm.value.material
    );

    this.incidentService.resolutionEmitChange(this.newResolution);
  }

}
