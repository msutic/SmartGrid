import {OnInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Workplan } from 'src/app/entities/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { ActivatedRoute } from '@angular/router';
import { MultimediaWorkplan } from 'src/app/entities/multimedia-workplan';

@Component({
  selector: 'app-workplan-preview',
  templateUrl: './workplan-preview.component.html',
  styleUrls: ['./workplan-preview.component.css']
})
export class WorkplanPreviewComponent implements OnInit {
  workplans:Array<Workplan>=[];
  workplan:Workplan;
  workplanId:string='';
  workplanIdnumber:number;
  wm:MultimediaWorkplan;
  constructor(private ws:WorkplanService,private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.workplanId = this.route.snapshot.paramMap.get("id");
    this.workplanIdnumber=+this.workplanId;
    this.ws.loadWorkplans().subscribe(
      res=>{
        this.workplans=res;
        for(var i=0;i<this.workplans.length;i++)
        {
          if(this.workplans[i].id==this.workplanIdnumber)
          {
            this.workplan=this.workplans[i];
            this.wm=JSON.parse(this.workplan.multimedia.toString());
          }
        }
      }
    )




  }

}
