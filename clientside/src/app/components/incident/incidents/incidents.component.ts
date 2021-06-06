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
  incidentToDelete: Incident;
  
  constructor(private incidentService: IncidentService){}

  displayedColumns: string[] = ['action', 'id', 'type', 'priority', 'confirmed', 'status', 'description'
                            , 'etaStr', 'ataStr', 'outageTimeStr', 'etrStr', 'affectedConsumersNumber',
                            'calls', 'voltage', 'scheduledTimeStr', 'cause', 'subCause', 'constructionType',
                            'material', 'crew', 'multimediaAttachment'];
  dataSource = new MatTableDataSource(this.allIncidents);

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.incidentService.loadIncidents().subscribe(
      (res:any) => {
        this.fetchData()
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

  fetchData(){
    this.incidentService.loadIncidents().subscribe(
      data => {
        this.allIncidents = data;
        this.convertDate();
        this.dataSource = new MatTableDataSource(this.allIncidents);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDelete(id: number){
    this.incidentToDelete = this.allIncidents.find(i => i.id == id);
    this.incidentService.deleteIncident(this.incidentToDelete).subscribe(
      (res) => {
        this.fetchData();
      }
    )
  }

}

