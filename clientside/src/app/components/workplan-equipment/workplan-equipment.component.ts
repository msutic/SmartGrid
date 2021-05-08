import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface EquipmentData {
  id: string;
  type:string;
  name: string;
  address: string;
  coordinates:number[];
}
const ELEMENT_DATA: EquipmentData[] = [
  {id: 'EQ 1', type: "Prekidac" ,  address: 'Vladike Ćirića 10',name:"Prekidac1", coordinates:[10,20]},
  {id: 'EQ 2', type: "Osigurac",  address: 'Subotička 10',name:"Osigurac1", coordinates:[10,30]},
  {id: 'EQ 3', type: "Transformator",   address: 'Mileve Marića 14',name:"Transformator1", coordinates:[10,40]},
  {id: 'EQ 4', type: "Diskonektor",  address: 'Masarikova 2',name:"Diskonektor1", coordinates:[10,50]},
];

@Component({
  selector: 'app-workplan-equipment',
  templateUrl: './workplan-equipment.component.html',
  styleUrls: ['./workplan-equipment.component.css']
})
export class WorkplanEquipmentComponent implements AfterViewInit {
  existing_equipment=ELEMENT_DATA;
  selected_equipment=ELEMENT_DATA[0];
  constructor() { }
  displayedColumns: string[] = ['id', 'type', 'name', 'address', 'coordinates', 'button'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  clickMethod(equipment: EquipmentData) {
    if(confirm("Are you sure to "+equipment.name+" this document")) {
      console.log("Document state changed");
    }
  }
  remove(equipment: EquipmentData) {
    if(confirm("Are you sure to "+equipment.id+" this document")) {
      console.log("Document state changed");
    }
  }

}
