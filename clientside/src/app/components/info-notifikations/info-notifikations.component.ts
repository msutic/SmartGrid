import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-info-notifikations',
  templateUrl: './info-notifikations.component.html',
  styleUrls: ['./info-notifikations.component.css']
})
export class InfoNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  info:Notifikacija[]=[];

  constructor() { 
    var procitana=new Notifikacija("info","info jbg",new Date(),"info");
  procitana.procitana=true;
  var neprocitana=new Notifikacija("warning","warning jbg",new Date,"warning");
  this.allNotifications.push(procitana);
  this.allNotifications.push(neprocitana); 
  this.GetInfo();
  }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.info);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ReadAll()
  {
    for(var i=0;i<this.info.length;i++)
    {
      this.info[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    this.info.splice(0,this.info.length);
    this.dataSource._updateChangeSubscription();
  }
GetInfo()
{
  for(var i=0;i<this.allNotifications.length;i++)
  {
    if(this.allNotifications[i].tip=="info")
    {
      this.info.push(this.allNotifications[i]);
    }
  }
}

}
