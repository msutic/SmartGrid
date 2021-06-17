import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';

@Component({
  selector: 'app-unread-notifikations',
  templateUrl: './unread-notifikations.component.html',
  styleUrls: ['./unread-notifikations.component.css']
})
export class UnreadNotifikationsComponent implements AfterViewInit {
  neprocitane:Notifikacija[]=[];
  constructor(public sss:SettingsServiceService,public ns:NotifikacijaserviceService) {


}
displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
dataSource = new MatTableDataSource(this.neprocitane);
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit(): void {
  this.ns.loadUnreadNotifikations().subscribe(
    (res:any) => {
      this.fetchData()
    }
  )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  fetchData(){
    this.ns.loadUnreadNotifikations().subscribe(
      data => {
        this.neprocitane = data;
        //this.convertDate();
       

        
        this.dataSource = new MatTableDataSource(this.neprocitane);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
ReadAll()
  {
    for(var i=0;i<this.neprocitane.length;i++)
    {
      this.ns.ReadNotification(this.neprocitane[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    for(var i=0;i<this.neprocitane.length;i++)
    {
      this.ns.DeleteNotification(this.neprocitane[i]).subscribe(
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