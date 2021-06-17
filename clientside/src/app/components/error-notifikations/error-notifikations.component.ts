import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';


@Component({
  selector: 'app-error-notifikations',
  templateUrl: './error-notifikations.component.html',
  styleUrls: ['./error-notifikations.component.css']
})
export class ErrorNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  errors:Notifikacija[]=[];
  empty;

  constructor(public ns:NotifikacijaserviceService) {
 
  


  }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.errors);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.ns.loadErrorNotifikations().subscribe(
      (res:any) => {
        this.fetchData()
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchData(){
    this.ns.loadErrorNotifikations().subscribe(
      data => {
        this.errors = data;
        //this.convertDate();
       

        
        this.dataSource = new MatTableDataSource(this.errors);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  ReadAll()
  {
    for(var i=0;i<this.errors.length;i++)
    {
      this.ns.ReadNotification(this.errors[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    
  }
ClearAll()
  {
    for(var i=0;i<this.errors.length;i++)
    {
      this.ns.DeleteNotification(this.errors[i]).subscribe(
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
