import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface StateData {
  user: string;
  old_status:string;
  new_status: string;
  timeOfChange: Date;
}
const ELEMENT_DATA: StateData[] = [
  {user: 'User 1', old_status: 'Draft', new_status: 'Draft', timeOfChange: new Date(Date.now())},
  {user: 'User 2', old_status: 'Draft', new_status: 'Submitted',timeOfChange: new Date(Date.now())},
  {user: 'User 3', old_status: 'Submitted', new_status: 'Submitted',timeOfChange: new Date(Date.now())},
  {user: 'User 4', old_status: 'Submitted', new_status: 'Submitted 2',timeOfChange: new Date(Date.now())},
];
@Component({
  selector: 'app-new-workplan-states',
  templateUrl: './new-workplan-states.component.html',
  styleUrls: ['./new-workplan-states.component.css']
})
export class NewWorkplanStatesComponent implements AfterViewInit {
  states=["Approve", "Deny", "Cancel"];
  selected_state=this.states[0];
  constructor() { }
  
  
  
  displayedColumns: string[] = ['user', 'old_status', 'new_status', 'timeOfChange'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;

  
  }
  clickMethod(name: string) {
    if(confirm("Are you sure to "+name+" this document")) {
      console.log("Document state changed");
    }
  }

}
