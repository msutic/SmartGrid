import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface IncidentData {
  id: number;
  reason: string;
  hazard: string;
  comment: string;
}

const ELEMENT_DATA: IncidentData[] = [
  {id: 1525222, reason: 'No electricity', hazard: 'Strong wind', comment: 'hey it doesnt work'},
  {id: 8155292, reason: 'No electricity', hazard: 'Strong wind', comment: 'mine neither'},
];

@Component({
  selector: 'app-incident-calls',
  templateUrl: './incident-calls.component.html',
  styleUrls: ['./incident-calls.component.css']
})
export class IncidentCallsComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'reason', 'hazard', 'comment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
