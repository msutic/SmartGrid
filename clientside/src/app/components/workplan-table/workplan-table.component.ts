import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Workplan } from 'src/app/entities/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';


@Component({
  selector: 'app-workplan-table',
  templateUrl: './workplan-table.component.html',
  styleUrls: ['./workplan-table.component.css']
  
})
export class WorkplanTableComponent implements AfterViewInit {
  workplans:Array<Workplan>=[];
  dataSource;
  constructor(private ws:WorkplanService) { }
  
 

  
  displayedColumns: string[] = ['id','type', 'order', 'incidentId', 'status', 'startDate','endDate','crewId','createdBy','purpuse','notes','company','phoneNumber','createdOn','actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit(): void {
    this.ws.loadWorkplans().subscribe(
      res=>{
        this.workplans=res;
        this.dataSource=new MatTableDataSource(this.workplans);
      }
    )
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onDelete(id:number){
    this.ws.deleteWorkplan(id).subscribe(
      res=>{
        window.location.reload();
      }
    )
  }

}
