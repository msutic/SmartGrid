import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-unread-notifikations',
  templateUrl: './unread-notifikations.component.html',
  styleUrls: ['./unread-notifikations.component.css']
})
export class UnreadNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  neprocitane:Notifikacija[]=[];
  constructor() {
    var procitana=new Notifikacija("error","error jbg",new Date(),"error");
  procitana.procitana=true;
  var neprocitana=new Notifikacija("warning","warning jbg",new Date,"warning");
  this.allNotifications.push(procitana);
  this.allNotifications.push(neprocitana); 
  this.GetUnread();
}
displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
dataSource = new MatTableDataSource(this.neprocitane);
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
ReadAll()
  {
    for(var i=0;i<this.neprocitane.length;i++)
    {
      this.neprocitane[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    this.neprocitane.splice(0,this.neprocitane.length);
    this.dataSource._updateChangeSubscription();
  }
GetUnread()
{
  for(var i=0;i<this.allNotifications.length;i++)
  {
    if(this.allNotifications[i].procitana==false)
    {
      this.neprocitane.push(this.allNotifications[i]);
    }
  }
}
  

}
