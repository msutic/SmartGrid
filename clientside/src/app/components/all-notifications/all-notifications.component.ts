import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];


  constructor(public sss:SettingsServiceService, public ns:NotifikacijaserviceService, public router:Router) {
  

   }

  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.allNotifications);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.ns.loadNotifikations().subscribe(
      (res:any) => {
        this.fetchData()
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchData(){
    this.ns.loadNotifikations().subscribe(
      data => {
        this.allNotifications = data;
        //this.convertDate();
       

        
        this.dataSource = new MatTableDataSource(this.allNotifications);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  



  ReadAll()
  {
    for(var i=0;i<this.allNotifications.length;i++)
    {
      //this.allNotifications[i].procitana=true;
      this.ns.ReadNotification(this.allNotifications[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    
    this.dataSource._updateChangeSubscription();
  }
  ClearAll()
  {
    for(var i=0;i<this.allNotifications.length;i++)
    {
      this.ns.DeleteNotification(this.allNotifications[i]).subscribe(
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
