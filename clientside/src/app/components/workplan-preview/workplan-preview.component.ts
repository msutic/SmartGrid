import {OnInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { Workplan } from 'src/app/entities/workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { ActivatedRoute } from '@angular/router';
import { MultimediaWorkplan } from 'src/app/entities/multimedia-workplan';
import { Instrukcija } from 'src/app/entities/instrukcija';
import { User } from 'src/app/entities/user';
import { Notifikacija } from 'src/app/entities/notifikacija';
import { NotifikacijaserviceService } from 'src/app/services/notifikacijaservice.service';

@Component({
  selector: 'app-workplan-preview',
  templateUrl: './workplan-preview.component.html',
  styleUrls: ['./workplan-preview.component.css']
})
export class WorkplanPreviewComponent implements OnInit {
  workplans:Array<Workplan>=[];
  instructions:Array<Instrukcija>=[];
  workplan:Workplan=new Workplan("a","a",new Date(Date.now()),new Date(Date.now()),1,"a","a");
  workplanId:string='';
  workplanIdnumber:number;
  listastringova:Array<string>=[];
  wm:MultimediaWorkplan=new MultimediaWorkplan(this.listastringova);
  selectedRowIndex = -1;
  selectedRow:Instrukcija=null;
  currentRole:String='';
  currentUsername:String='';
  currentUser:User;
  erorNotifikacija:Notifikacija;
  successNotifikacija:Notifikacija;
  infoNotifikacija:Notifikacija;
  dataSource = new MatTableDataSource(this.instructions);
  constructor(private ws:WorkplanService,private route:ActivatedRoute,private ns:NotifikacijaserviceService) { }

  displayedColumns: string[] = ['id', 'description', 'executed', 'element','element_type'];
  
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            
            
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
              this.erorNotifikacija=new Notifikacija("error","Error when executing instruction",new Date(Date.now()));
              this.ns.addNewNotification(this.erorNotifikacija).subscribe(
                res=>{

                }
              )
              alert("You can't execute instructions of unapproved workplans!");
            }else
            {
              this.successNotifikacija=new Notifikacija("success","Instruction successfully!",new Date(Date.now()));
              this.ns.addNewNotification(this.successNotifikacija).subscribe(
                res=>{

                }
              )
              
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
            this.erorNotifikacija=new Notifikacija("error","Error when executing instruction",new Date(Date.now()));
              this.ns.addNewNotification(this.erorNotifikacija).subscribe(
                res=>{

                }
              )
            alert("Izabrana instrukcija vec izvrsena!");
          }
        }
      });
      this.dataSource._updateChangeSubscription();
    }else
    {
      alert("Nije selektovana instrukcija za izvrsavanje");
    }
  }

  approveWorkplan()
  {
    if(this.workplan.status !== "Approved")
    {
      this.currentRole=JSON.parse(localStorage.getItem("sessionUser").toString());
      this.currentUsername=JSON.parse(localStorage.getItem("sessionUsername").toString());
    if(this.currentRole !== 'dispatcher' )
    {
      this.erorNotifikacija=new Notifikacija("error","Error when approving workplan!",new Date(Date.now()));
              this.ns.addNewNotification(this.erorNotifikacija).subscribe(
                res=>{

                }
              )
      alert("Only dispatchers can approve workplans!");
    }else
    {
      if(this.currentUsername === this.workplan.createdBy)
      {
        this.erorNotifikacija=new Notifikacija("error","Error when approving workplan!",new Date(Date.now()));
              this.ns.addNewNotification(this.erorNotifikacija).subscribe(
                res=>{

                }
              )
        alert("You can't approve your own workplans!");
      }
      else
      {
        this.successNotifikacija=new Notifikacija("success","Workplan successfully approved!",new Date(Date.now()),"workplans");
              this.ns.addNewNotification(this.successNotifikacija).subscribe(
                res=>{

                }
              )


        this.workplan.status="Approved";
        this.ws.approveWorkplan(this.workplan).subscribe(
          res=>{
            window.location.reload();
          }
        )
      }
    }
    }else
    {
      alert("Workplan already approved!");
    }
    

  }

}
