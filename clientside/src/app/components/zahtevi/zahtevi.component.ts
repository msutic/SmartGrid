import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Promenauloge } from 'src/app/entities/promenauloge';
import { ZahteviService } from 'src/app/services/zahtevi.service';


@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {

  allZahtevi = new Array<Promenauloge>();
  deletedZahtev: Promenauloge;

  constructor(private zs: ZahteviService) { }

  displayedColumns: string[] = ['username', 'oldrole', 'newrole','action'];
  dataSource = new MatTableDataSource(this.allZahtevi);

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.zs.getZahtevi().subscribe(
      (res: any) => {
        this.allZahtevi = res;
        this.dataSource = new MatTableDataSource(this.allZahtevi);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      }
    )
  }
  onApprove(id:number){
    this.zs.approveZahtev(id).subscribe(
      res=>{
        window.location.reload();
      }
    )
  }
  onDeny(id:number){
    this.zs.denyZahtev(id).subscribe(
      res=>{
        window.location.reload();
      }
    )
  }
}
