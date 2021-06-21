import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-notifikations',
  templateUrl: './info-notifikations.component.html',
  styleUrls: ['./info-notifikations.component.css']
})
export class InfoNotifikationsComponent implements AfterViewInit {
  info:Notifikacija[]=[];
  links:Array<String>=[];
  constructor(public ns:NotifikacijaserviceService, private router:Router) { 
    
  
  }
  displayedColumns: string[] = ['ikona','tip', 'tekst', 'vreme', 'procitana'];
  dataSource = new MatTableDataSource(this.info);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.ns.loadInfoNotifikations().subscribe(
      (res:any) => {
        this.fetchData()
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchData(){
    this.ns.loadInfoNotifikations().subscribe(
      data => {
        this.info = data;
        //this.convertDate();
        for(var i=0;i<this.info.length;i++)
        {
          this.links.push(this.info[i].link);
        }

        
        this.dataSource = new MatTableDataSource(this.info);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  ReadAll()
  {
    for(var i=0;i<this.info.length;i++)
    {
      this.ns.ReadNotification(this.info[i]).subscribe(
        res=>{
          window.location.reload();
        }
      )
    }
    
  }

  Open(i:number)
  {
    this.router.navigate([this.links[i]]);
  }
ClearAll()
  {
    for(var i=0;i<this.info.length;i++)
    {
      this.ns.DeleteNotification(this.info[i]).subscribe(
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
