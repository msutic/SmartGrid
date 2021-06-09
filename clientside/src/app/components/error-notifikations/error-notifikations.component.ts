import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-error-notifikations',
  templateUrl: './error-notifikations.component.html',
  styleUrls: ['./error-notifikations.component.css']
})
export class ErrorNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  errors:Notifikacija[]=[];

  constructor() {
    var procitana=new Notifikacija("error","error jbg",new Date(),"error");
  procitana.procitana=true;
  var neprocitana=new Notifikacija("warning","warning jbg",new Date,"warning");
  this.allNotifications.push(procitana);
  this.allNotifications.push(neprocitana); 
  this.GetErrors();

  }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.errors);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ReadAll()
  {
    for(var i=0;i<this.errors.length;i++)
    {
      this.errors[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    this.errors.splice(0,this.errors.length);
    this.dataSource._updateChangeSubscription();
  }
GetErrors()
{
  for(var i=0;i<this.allNotifications.length;i++)
  {
    if(this.allNotifications[i].tip=="error")
    {
      this.errors.push(this.allNotifications[i]);
    }
  }
}

}
