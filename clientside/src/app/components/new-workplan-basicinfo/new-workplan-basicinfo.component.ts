import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-new-workplan-basicinfo',
  templateUrl: './new-workplan-basicinfo.component.html',
  styleUrls: ['./new-workplan-basicinfo.component.css']
})
export class NewWorkplanBasicinfoComponent implements OnInit {
  myControl = new FormControl();
  value = 'WR 5';
  valueDesc = '';
  selected_status='Draft';
  selected_nalog='';
  selected_incident='';
  selected_crew='';
  nalozi_za_rad=["Order1","Order2","Order3","Order4"];
  incidenti_za_rad=["Incident1","Incident2","Incident3","Incident4"];
  crews_za_rad=["Crew1","Crew2","Crew3","Crew4"];
  options: string[] = ['Equipment Malfunction', 'Equipment Upgrade', 'Equipment Replace'];
  filteredOptions: Observable<string[]>;
  created_by="Current user";
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
