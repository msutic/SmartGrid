import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface WorkplanData {
  id: string;
  startDate: Date;
  phoneNum: string;
  status: string;
  address: string;
}
const ELEMENT_DATA: WorkplanData[] = [
  {id: 'WR 1', startDate: new Date(2018, 8, 13), phoneNum: '351-661-3252', status: 'Draft', address: 'Vladike Ćirića 10'},
  {id: 'WR 2', startDate: new Date(2018, 8, 13), phoneNum: '251-677-5362', status: 'Draft', address: 'Subotička 10'},
  {id: 'WR 3', startDate: new Date(2018, 8, 13), phoneNum: '351-661-3252', status: 'Submitted', address: 'Mileve Marića 14'},
  {id: 'WR 4', startDate: new Date(2018, 8, 13), phoneNum: '251-661-5362', status: 'Submitted', address: 'Masarikova 2'},
];
@Component({
  selector: 'app-workplan-table',
  templateUrl: './workplan-table.component.html',
  styleUrls: ['./workplan-table.component.css']
  
})
export class WorkplanTableComponent implements AfterViewInit {

  constructor() { }
  
  

  
  displayedColumns: string[] = ['id', 'startDate', 'phoneNum', 'status', 'address'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
