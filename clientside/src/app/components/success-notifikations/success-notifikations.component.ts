import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-success-notifikations',
  templateUrl: './success-notifikations.component.html',
  styleUrls: ['./success-notifikations.component.css']
})
export class SuccessNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  success:Notifikacija[]=[];

  constructor() {
    var procitana=new Notifikacija("info","info jbg",new Date(),"info");
  procitana.procitana=true;
  var neprocitana=new Notifikacija("success","success brt",new Date,"check");
  this.allNotifications.push(procitana);
  this.allNotifications.push(neprocitana); 
  this.GetSuccess();
   }
   displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.success);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ReadAll()
  {
    for(var i=0;i<this.success.length;i++)
    {
      this.success[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    this.success.splice(0,this.success.length);
    this.dataSource._updateChangeSubscription();
  }
GetSuccess()
{
  for(var i=0;i<this.allNotifications.length;i++)
  {
    if(this.allNotifications[i].tip=="success")
    {
      this.success.push(this.allNotifications[i]);
    }
  }
}

}
