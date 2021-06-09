import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-warning-notifikations',
  templateUrl: './warning-notifikations.component.html',
  styleUrls: ['./warning-notifikations.component.css']
})
export class WarningNotifikationsComponent implements AfterViewInit {
  allNotifications:Notifikacija[]=[];
  warnings:Notifikacija[]=[];

  constructor() {
    var procitana=new Notifikacija("info","info jbg",new Date());
  procitana.procitana=true;
  var neprocitana=new Notifikacija("warning","warning jbg",new Date);
  this.allNotifications.push(procitana);
  this.allNotifications.push(neprocitana); 
  this.GetWarnings();
   }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.warnings);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator; 

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  ReadAll()
  {
    for(var i=0;i<this.warnings.length;i++)
    {
      this.warnings[i].procitana=true;
    }
    this.dataSource._updateChangeSubscription();
  }
ClearAll()
  {
    this.warnings.splice(0,this.warnings.length);
    this.dataSource._updateChangeSubscription();
  }
GetWarnings()
{
  for(var i=0;i<this.allNotifications.length;i++)
  {
    if(this.allNotifications[i].tip=="warning")
    {
      this.warnings.push(this.allNotifications[i]);
    }
  }
}
clickedRow(a:Notifikacija)
{
  alert(a.tip+" "+a.tekst+" "+a.procitana);
}

}
