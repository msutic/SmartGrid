import {OnInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Workplan } from 'src/app/entities/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { ActivatedRoute } from '@angular/router';
import { MultimediaWorkplan } from 'src/app/entities/multimedia-workplan';
import { Instrukcija } from 'src/app/entities/instrukcija';

@Component({
  selector: 'app-workplan-preview',
  templateUrl: './workplan-preview.component.html',
  styleUrls: ['./workplan-preview.component.css']
})
export class WorkplanPreviewComponent implements OnInit {
  workplans:Array<Workplan>=[];
  instructions:Array<Instrukcija>=[];
  workplan:Workplan;
  workplanId:string='';
  workplanIdnumber:number;
  wm:MultimediaWorkplan;
  dataSource;
  selectedRowIndex = -1;
  selectedRow:Instrukcija=null;
  constructor(private ws:WorkplanService,private route:ActivatedRoute) { }

  displayedColumns: string[] = ['id', 'description', 'executed', 'element','element_type'];


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
            this.instructions=JSON.parse(this.workplan.instructions.toString());
            this.dataSource = new MatTableDataSource(this.instructions);
          }
        }

      }
    )
  }
  selectRow(row:Instrukcija)
  {
      this.selectedRow=row;
      this.selectedRowIndex=row.id;
  }

  ExecuteRow()
  {
    if(this.selectedRowIndex!=-1)
    {
      this.instructions.forEach((element,index)=>{
        if(element==this.selectedRow) 
        {
          if(this.instructions[index].executed==false)
          {
            if(!(this.workplan.status==="Approved"))
            {
              alert("You can't execute instructions of unapproved workplans");
            }else
            {
              this.instructions[index].executed=true;
              this.workplan.instructions=JSON.stringify(this.instructions);
              this.ws.updateWorkplanInstruktions(this.workplan).subscribe(
              res=>{
                window.location.reload();
              }
            )

            }
            

          }
          else
          {
            alert("Izabrana instrukcija vec izvrsena");
          }
        }
      });
      this.dataSource._updateChangeSubscription();
    }else
    {
      alert("Nije selektovana instrukcija za izvrsavanje");
    }
  }

}
