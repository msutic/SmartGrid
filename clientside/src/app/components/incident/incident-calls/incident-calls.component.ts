import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Call } from 'src/app/entities/call';
import { IncidentService } from 'src/app/services/incident/incident.service';

export interface IncidentCallsData {
  id: number;
  reason: string;
  hazard: string;
  comment: string;
  address: string;
}

@Component({
  selector: 'app-incident-calls',
  templateUrl: './incident-calls.component.html',
  styleUrls: ['./incident-calls.component.css']
})
export class IncidentCallsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'reason', 'hazard', 'comment', 'address'];
  allIncidentCalls = new Array<Call>();
  dataSource = new MatTableDataSource(this.allIncidentCalls);

  constructor(private incidentService: IncidentService, private router: Router){}


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.allIncidentCalls = this.incidentService.loadIncidentCalls();
    this.dataSource = new MatTableDataSource(this.allIncidentCalls);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSave(){
    this.incidentService.callsEmitChange(this.allIncidentCalls);
    this.router.navigate(['/incidents/new/crew']);
  }

}
