import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface IncidentData {
  id: number;
  name: string;
  type: string;
  coordinates: string;
  address: string;
}

const ELEMENT_DATA: IncidentData[] = [
  {id: 1525222, name: 'BRE_000075', type: 'Breaker', coordinates: '45-1559N 19E lol', address: 'Vladike Cirica 10'},
  {id: 1525222, name: 'BRE_000075', type: 'Breaker', coordinates: '81-4671N 53E 2f', address: 'Suboticka 10'},
];

@Component({
  selector: 'app-incident-devices',
  templateUrl: './incident-devices.component.html',
  styleUrls: ['./incident-devices.component.css']
})
export class IncidentDevicesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'coordinates', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
