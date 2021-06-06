import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasicInfo } from 'src/app/entities/incidents/basic-info';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-incident-basic-info',
  templateUrl: './incident-basic-info.component.html',
  styleUrls: ['./incident-basic-info.component.css']
})
export class IncidentBasicInfoComponent implements OnInit {
  incidentId: string = '';
  basicInfoForm: FormGroup;
  newBasicInfo: BasicInfo;

  constructor(private incidentService: IncidentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.incidentId = this.route.snapshot.paramMap.get('id');
    if(this.incidentId == null){
      this.initForm();
    }
  }

  initForm(){
    this.basicInfoForm = new FormGroup({
      'type': new FormControl(),
      'priority': new FormControl(),
      'confirmed': new FormControl(),
      'status': new FormControl(),
      'description': new FormControl(),
      'eta': new FormControl(),
      'ata': new FormControl(),
      'affectedCustomers': new FormControl(),
      'outageTime': new FormControl(),
      'etr': new FormControl(),
      'calls': new FormControl(),
      'voltage': new FormControl(),
      'scheduledTime': new FormControl(),
    })
  }

  onSaveClick(){
    this.newBasicInfo = new BasicInfo(
      this.basicInfoForm.value.type,
      parseInt(this.basicInfoForm.value.priority),
      this.basicInfoForm.value.confirmed,
      this.basicInfoForm.value.status,
      this.basicInfoForm.value.description,
      this.basicInfoForm.value.eta.toString(),
      this.basicInfoForm.value.ata.toString(),
      parseInt(this.basicInfoForm.value.affectedCustomets),
      this.basicInfoForm.value.outageTime.toString(),
      this.basicInfoForm.value.etr.toString(),
      parseInt(this.basicInfoForm.value.calls),
      parseFloat(this.basicInfoForm.value.voltage),
      this.basicInfoForm.value.scheduledTime.toString()
    );

    this.incidentService.emitChange(this.newBasicInfo); 
   }



}
