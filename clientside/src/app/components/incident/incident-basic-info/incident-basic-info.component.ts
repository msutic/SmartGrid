import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  selected = 'Planned Work';

  constructor(private router: Router, private incidentService: IncidentService, private route: ActivatedRoute) { }

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
      'affectedConsumers': new FormControl(),
      'outageTime': new FormControl(),
      'etr': new FormControl(),
      'calls': new FormControl(),
      'voltage': new FormControl(),
      'scheduledTime': new FormControl(),
    })
  }

  onSaveClick(){
    if(this.basicInfoForm.value.type == null) this.basicInfoForm.value.type = "Planned Work"
    if(this.basicInfoForm.value.status == null) this.basicInfoForm.value.status = "Draft";
    if(this.basicInfoForm.value.eta == null) this.basicInfoForm.value.eta = new Date(Date.now())
    if(this.basicInfoForm.value.ata == null) this.basicInfoForm.value.ata = new Date(Date.now())
    if(this.basicInfoForm.value.outageTime == null) this.basicInfoForm.value.outageTime = new Date(Date.now())
    if(this.basicInfoForm.value.etr == null) this.basicInfoForm.value.etr = new Date(Date.now())
    if(this.basicInfoForm.value.scheduledTime == null) this.basicInfoForm.value.scheduledTime = new Date(Date.now())
    let conf = this.basicInfoForm.value.confirmed;
    if(conf == null) conf = false;

    if(this.basicInfoForm.value.priority == null) this.basicInfoForm.value.priority = 0;
    if(this.basicInfoForm.value.affectedConsumers == null) this.basicInfoForm.value.affectedConsumers = 0;
    if(this.basicInfoForm.value.calls == null) this.basicInfoForm.value.calls = 0;
    if(this.basicInfoForm.value.voltage == null) this.basicInfoForm.value.voltage = 0;

    if(this.basicInfoForm.value.priority < 0 || 
      this.basicInfoForm.value.affectedConsumers < 0 || this.basicInfoForm.value.calls < 0 ||
      this.basicInfoForm.value.voltage < 0){
      alert('Invalid input. Check number fields.')
    } else {
      this.newBasicInfo = new BasicInfo(
        this.basicInfoForm.value.type,
        parseInt(this.basicInfoForm.value.priority),
        conf,
        this.basicInfoForm.value.status,
        this.basicInfoForm.value.description,
        this.basicInfoForm.value.eta,
        this.basicInfoForm.value.ata,
        parseInt(this.basicInfoForm.value.affectedConsumers),
        this.basicInfoForm.value.outageTime,
        this.basicInfoForm.value.etr,
        parseInt(this.basicInfoForm.value.calls),
        parseFloat(this.basicInfoForm.value.voltage),
        this.basicInfoForm.value.scheduledTime
      );
  
      this.incidentService.emitChange(this.newBasicInfo); 
      this.router.navigate(['/incidents/new/devices']);
    }
    
   }



}
