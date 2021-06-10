import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Potrosac} from '../../entities/potrosac';
import { from } from 'rxjs';
import { Lokacija } from 'src/app/entities/lokacija';

@Component({
  selector: 'app-potrosaci',
  templateUrl: './potrosaci.component.html',
  styleUrls: ['./potrosaci.component.css']
})
export class PotrosaciComponent implements AfterViewInit {
  potrosaci:Potrosac[]=[];
  selectedRow:Potrosac;
  selectedRowIndex=-1;
  constructor() { 
    var potrosac1=new Potrosac("Pera","Petrovic",new Lokacija("Vojvodjanska","Novi Sad",21000),"0605148585",1,"Rezidentalni");
    var potrosac2=new Potrosac("Sima","Simic",new Lokacija("Krajiska","Mladenovo",21000),"0212066406",2,"Komercijalni");
    this.potrosaci.push(potrosac1);
    this.potrosaci.push(potrosac2);
  }

  displayedColumns: string[] = ['id', 'ime', 'prezime', 'ulica', 'grad','broj','tip'];
  dataSource = new MatTableDataSource(this.potrosaci);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  selectRow(row:Potrosac)
  {
    this.selectedRow=row;
    this.selectedRowIndex=row.id;
    alert(row.ime);
  }

}
