import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface IncidentData {
  id: string;
  startDate: Date;
  phoneNum: string;
  status: string;
  address: string;
}

const date1: Date = new Date(2020, 9, 9);
const ELEMENT_DATA: IncidentData[] = [
  {id: 'WR 1', startDate: new Date(2018, 8, 13), phoneNum: '351-661-3252', status: 'Draft', address: 'Vladike Cirica 10'},
  {id: 'WR 2', startDate: new Date(2020, 9, 20), phoneNum: '351-677-8212', status: 'Draft', address: 'Suboticka 10'},
  {id: 'WR 3', startDate: new Date(2011, 3, 23), phoneNum: '451-998-9327', status: 'Submitted', address: 'Mileve Maric 14'},
  {id: 'WR 4', startDate: new Date(2016, 5, 2), phoneNum: '251-661-5478', status: 'Submitted', address: 'Masarikova 2'},
];

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'startDate', 'phoneNum', 'status', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

