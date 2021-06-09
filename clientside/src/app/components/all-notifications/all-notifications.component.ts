import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.css']
})
export class AllNotificationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];


  constructor() {
    var procitana=new Notifikacija("error","error jbg",new Date());
    procitana.procitana=true;
    var neprocitana=new Notifikacija("warning","warning jbg",new Date,);
    var procitana1=new Notifikacija("info","info jbg",new Date(2021,10));
    procitana1.procitana=true;
    var neprocitana2=new Notifikacija("success","success brt",new Date(1998,17,11,4,40,45));
    this.allNotifications.push(procitana);
    this.allNotifications.push(neprocitana);
    this.allNotifications.push(procitana1);
    this.allNotifications.push(neprocitana2);
   }

  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.allNotifications);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ReadAll()
  {
    for(var i=0;i<this.allNotifications.length;i++)
    {
      this.allNotifications[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
  ClearAll()
  {
    this.allNotifications.splice(0,this.allNotifications.length);
    this.dataSource._updateChangeSubscription();
  }
  clickedRow(a:Notifikacija)
{
  alert(a.tip+" "+a.tekst+" "+a.procitana);
}


}
