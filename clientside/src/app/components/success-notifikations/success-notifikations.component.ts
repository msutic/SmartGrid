import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';

@Component({
  selector: 'app-success-notifikations',
  templateUrl: './success-notifikations.component.html',
  styleUrls: ['./success-notifikations.component.css']
})
export class SuccessNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  success:Notifikacija[]=[];

  constructor(public ns:NotifikacijaserviceService) {
   }
   displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.success);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  ngAfterViewInit(): void {
    this.ns.loadSuccessNotifikations().subscribe(
      (res:any) => {
        this.fetchData()
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchData(){
    this.ns.loadSuccessNotifikations().subscribe(
      data => {
        this.success = data;
       
       

        
        this.dataSource = new MatTableDataSource(this.success);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  ReadAll()
  {
    for(var i=0;i<this.success.length;i++)
    {
      this.ns.DeleteNotification(this.success[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    
  }
ClearAll()
  {
    for(var i=0;i<this.success.length;i++)
    {
      this.ns.DeleteNotification(this.success[i]).subscribe(
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
