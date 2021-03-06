import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router: Router, private incidentService: IncidentService, private route: ActivatedRoute) { }

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
    if(this.resolutionForm.value.cause == null || this.resolutionForm.value.subcause == null ||
      this.resolutionForm.value.constructionType == null || this.resolutionForm.value.material == null){
        alert('Invalid selection.');
      } else {
        this.newResolution = new Resolution(
          this.resolutionForm.value.cause,
          this.resolutionForm.value.subcause,
          this.resolutionForm.value.constructionType,
          this.resolutionForm.value.material
        );
    
        this.incidentService.resolutionEmitChange(this.newResolution);
    
        this.router.navigate(['/incidents/new/calls']);
      }
    
  }

}
