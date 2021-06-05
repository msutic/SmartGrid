import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Incident } from 'src/app/entities/incident';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  allIncidents = new Array<Incident>();
  
  constructor(private incidentService: IncidentService){}

  displayedColumns: string[] = ['id', 'type', 'priority', 'confirmed', 'status', 'description'
                            , 'etaStr', 'ataStr', 'outageTimeStr', 'etrStr', 'affectedConsumersNumber',
                            'calls', 'voltage', 'scheduledTimeStr', 'cause', 'subCause', 'constructionType',
                            'material', 'crew', 'multimediaAttachment'];
  dataSource = new MatTableDataSource(this.allIncidents);

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.incidentService.loadIncidents().subscribe(
      (res:any) => {
        this.allIncidents = res;
        this.convertDate();
        this.dataSource = new MatTableDataSource(this.allIncidents);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  private convertDate(){
    this.allIncidents.forEach(element => {
      var date = new Date(element.eta);
      element.etaStr = date.getFullYear().toString() + '.' + date.getMonth().toString() + '.' + date.getDay().toString() + '. ' + date.getHours().toString() + ':' + date.getMinutes().toString();

      date = new Date(element.ata);
      element.ataStr = date.getFullYear().toString() + '.' + date.getMonth().toString() + '.' + date.getDay().toString() + '. ' + date.getHours().toString() + ':' + date.getMinutes().toString();

      date = new Date(element.outageTime);
      element.outageTimeStr = date.getFullYear().toString() + '.' + date.getMonth().toString() + '.' + date.getDay().toString() + '. ' + date.getHours().toString() + ':' + date.getMinutes().toString();

      date = new Date(element.etr);
      element.etrStr = date.getFullYear().toString() + '.' + date.getMonth().toString() + '.' + date.getDay().toString() + '. ' + date.getHours().toString() + ':' + date.getMinutes().toString();

      date = new Date(element.scheduledTime);
      element.scheduledTimeStr = date.getFullYear().toString() + '.' + date.getMonth().toString() + '.' + date.getDay().toString() + '. ' + date.getHours().toString() + ':' + date.getMinutes().toString();
    });
  }

}

