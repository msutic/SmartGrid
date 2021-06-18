import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Potrosac} from '../../entities/potrosac';
import { from } from 'rxjs';
import { Lokacija } from 'src/app/entities/lokacija';
import { PotrosacService } from 'src/app/services/potrosac.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-potrosaci',
  templateUrl: './potrosaci.component.html',
  styleUrls: ['./potrosaci.component.css']
})
export class PotrosaciComponent implements OnInit {
  potrosaci=new Array<Potrosac>();
  selectedRow:Potrosac;
  selectedRowIndex=-1;
  routerLink:String;
  constructor(public ps:PotrosacService, public router:Router) {}
  

  displayedColumns: string[] = ['id', 'ime', 'prezime', 'ulica', 'grad','tip', 'action'];
  dataSource = new MatTableDataSource(this.potrosaci);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.ps.loadPotrosaci().subscribe(
      (res: any) => {
        this.potrosaci = res;
        this.dataSource = new MatTableDataSource(this.potrosaci);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      }
    )
  }
  selectRow(row:Potrosac)
  {
    this.selectedRow=row;
    this.selectedRowIndex=row.id;
  }
  DeleteRow()
  {
    this.ps.deletePotrosac(this.selectedRow).subscribe(
      res=>{
        this.fetchData();
      }
    )
  }
  EditRow()
  {
    this.router.navigate([this.routerLink]);
  }

  fetchData(){
    this.ps.loadPotrosaci().subscribe(
      data => {this.dataSource = data;}
    );
  }

}
