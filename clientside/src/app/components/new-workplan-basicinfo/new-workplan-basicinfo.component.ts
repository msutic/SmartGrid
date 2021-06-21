import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { getLocaleDateTimeFormat } from '@angular/common';
import {DatePipe} from '@angular/common';
import { Podesavanja } from 'src/app/entities/podesavanja';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import { BasicInfoWorkplan } from 'src/app/entities/basic-info-workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { Router } from '@angular/router';
import { Incident } from 'src/app/entities/incident';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { Workplan } from 'src/app/entities/workplan';
@Component({
  selector: 'app-new-workplan-basicinfo',
  templateUrl: './new-workplan-basicinfo.component.html',
  styleUrls: ['./new-workplan-basicinfo.component.css'],
  providers:[DatePipe]
})
export class NewWorkplanBasicinfoComponent implements OnInit {
  incidents:Array<Incident>
  myControl = new FormControl();
  value = 'WR 5';
  valueDesc = '';
  valueStreet='';
  selected_nalog='';
  selected_incident='';
  selected_crew='';
  nalozi_za_rad=["1","2","3","4"];
  incidenti_za_rad=["Incident1","Incident2","Incident3","Incident4"];
  crews_za_rad=["1","2","3","4"];
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  created_by=JSON.parse(localStorage.getItem("sessionUsername"));
  company='';
  option='';
  phone='';
  possible_status=["Draft","Approved", "Denyed"];
  selected_status=this.possible_status[0];
  workplans:Array<Workplan>=[];

  basicInfoForm:FormGroup;
  created_on = new Date(Date.now());
  podesavanja:Podesavanja=new Podesavanja(true,true,true,true,true);
  newBasicInfoWorkplan:BasicInfoWorkplan;
  
  constructor(public sss:SettingsServiceService,public ws:WorkplanService,public router:Router,public is:IncidentService) {
    this.sss.getSettings().subscribe(
      res=>{
        this.podesavanja=res;
        this.is.loadIncidents().subscribe(
          res=>{
            this.incidents=res;
            this.ws.loadWorkplans().subscribe(
              res=>{
                this.workplans=res;
                for(var i=0;i<this.workplans.length;i++)
                {
                  this.options.push(this.workplans[i].purpuse.toString());
                }
              }
            )
            
          }
        )
      }
    )
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    this.initForm();
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  initForm(){
    this.basicInfoForm = new FormGroup({
      'type': new FormControl('',Validators.required),
      'order': new FormControl(''),
      'incident': new FormControl('',Validators.required),
      'status': new FormControl('',Validators.required),
      'street': new FormControl('',Validators.required),
      'startDate': new FormControl('',Validators.required),
      'endDate': new FormControl('',Validators.required),
      'crew': new FormControl('',Validators.required),
      'purpuse':new FormControl('',Validators.required),
      'notes': new FormControl(''),
      'company': new FormControl('',Validators.required),
      'phoneNumber':new FormControl(''),
    })
  }
  get formControls(): any {
    return this.basicInfoForm['controls'];
 }

 onSaveClick(){
    this.newBasicInfoWorkplan = new BasicInfoWorkplan(
      this.basicInfoForm.value.type,
      this.basicInfoForm.value.status,
      this.basicInfoForm.value.startDate,
      this.basicInfoForm.value.endDate,
      this.basicInfoForm.value.crew,
      this.basicInfoForm.value.purpuse,
      this.basicInfoForm.value.company,
      this.basicInfoForm.value.order,
      this.basicInfoForm.value.incident,
      this.basicInfoForm.value.notes,
      this.basicInfoForm.value.phoneNumber
    );

    this.ws.emitChange(this.newBasicInfoWorkplan); 
    this.router.navigate(['/new-workplan/multimedia-attachments']);
  }
  
 }

