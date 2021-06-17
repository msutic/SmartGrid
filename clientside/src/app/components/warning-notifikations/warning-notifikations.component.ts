import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';

@Component({
  selector: 'app-warning-notifikations',
  templateUrl: './warning-notifikations.component.html',
  styleUrls: ['./warning-notifikations.component.css']
})
export class WarningNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  warnings:Notifikacija[]=[];

  constructor(public ns:NotifikacijaserviceService) {
    
   }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.warnings);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  ngAfterViewInit(): void {
    this.ns.loadWarningNotifikations().subscribe(
      (res:any) => {
        this.fetchData()
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchData(){
    this.ns.loadWarningNotifikations().subscribe(
      data => {
        this.warnings = data;
       
       

        
        this.dataSource = new MatTableDataSource(this.warnings);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  ReadAll()
  {
    for(var i=0;i<this.warnings.length;i++)
    {
      this.ns.ReadNotification(this.warnings[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    
  }
ClearAll()
  {
    for(var i=0;i<this.warnings.length;i++)
    {
      this.ns.DeleteNotification(this.warnings[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
  }
clickedRow(a:Notifikacija)
{
  if(a.procitana==false)
  {
    this.ns.ReadNotification(a).subscribe(
      res=>{
        window.location.reload();
      }
    )
  }
}

}
