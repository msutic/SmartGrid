import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SafetydocBasicInfo } from 'src/app/entities/safetydocs/safetydoc-basic-info';
import { SafetydocService } from 'src/app/services/safetydoc/safetydoc.service';

@Component({
  selector: 'app-safetydoc-basicinfo',
  templateUrl: './safetydoc-basicinfo.component.html',
  styleUrls: ['./safetydoc-basicinfo.component.css']
})
export class SafetydocBasicinfoComponent implements OnInit {

  safetydocBasicInfoForm: FormGroup;

  newBasicInfo: SafetydocBasicInfo;
  statusDoc = "Draft";
  crew = "Crew 3";

  constructor(private router: Router, private safetydocService: SafetydocService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    let name = localStorage.getItem('sessionUsername');
    let lastname = localStorage.getItem('sessionUserLastname');
    this.safetydocBasicInfoForm = new FormGroup({
      'status': new FormControl(this.statusDoc),
      'type': new FormControl(),
      'switchingPlan': new FormControl(),
      'safetyDocType': new FormControl(),
      'dateCreated': new FormControl(),
      'phoneNo': new FormControl(),
      'crew': new FormControl(this.crew),
      'creator': new FormControl(JSON.parse(name) + ' ' + JSON.parse(lastname)),
      'details': new FormControl(),
      'notes': new FormControl(),
    })
  }

  onSave(){
    if(this.safetydocBasicInfoForm.value.type == null || this.safetydocBasicInfoForm.value.safetyDocType == null ||
      this.safetydocBasicInfoForm.value.phoneNo == null) {
        alert('Some fields are left empty.');
      } else {
        this.newBasicInfo = new SafetydocBasicInfo(
          this.safetydocBasicInfoForm.value.status,
          this.safetydocBasicInfoForm.value.type,
          this.safetydocBasicInfoForm.value.switchingPlan,
          this.safetydocBasicInfoForm.value.safetyDocType,
          new Date(Date.now()),
          this.safetydocBasicInfoForm.value.phoneNo,
          this.safetydocBasicInfoForm.value.crew,
          this.safetydocBasicInfoForm.value.creator,
          this.safetydocBasicInfoForm.value.details,
          this.safetydocBasicInfoForm.value.notes
        );

        this.safetydocService.basicInfoEmitChange(this.newBasicInfo);
        this.router.navigate(['/safetydocs/new/devices']);
      }
  }

}
