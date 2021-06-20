import { AfterViewInit,TemplateRef,ViewChild, Component, OnInit,NgZone } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Instrukcija } from 'src/app/entities/instrukcija';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import {MatDialog,MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormControl, NgForm,Validators,FormBuilder,FormGroup} from '@angular/forms';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';
import { WorkplanService } from 'src/app/services/workplan.service';
import { Router } from '@angular/router';

export interface EquipmentData {
  id: string;
  type:string;
  name: string;
  address: string;
  coordinates:number[];
}



@Component({
  selector: 'app-workplan-instructions',
  templateUrl: './workplan-instructions.component.html',
  styleUrls: ['./workplan-instructions.component.css']
})
export class WorkplanInstructionsComponent implements OnInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  binded_instructions:Instrukcija[]=[];
  
  selectedRowIndex = -1;
  selectedRow:Instrukcija=null;
  selectedElement:EquipmentData=null;
  equipment:Array<Device>;
  element:Device;


  constructor(public dialog:MatDialog,private ngZone: NgZone,private es:DeviceService,private ws:WorkplanService,public router:Router) { }
  instructionList:Array<Instrukcija>

  

  displayedColumns: string[] = ['id', 'description', 'executed', 'element','element_type'];
  dataSource = new MatTableDataSource(this.binded_instructions);

  ngOnInit(): void {
    this.es.loadDevices().subscribe(
      res=>{
        this.equipment=res;
      }
    )
  }

  selectRow(row:Instrukcija)
  {
      this.selectedRow=row;
      this.selectedRowIndex=row.id;
  }
  deleteRow()
  {
   
    if(this.selectedRowIndex!=-1)
    {
      this.binded_instructions.forEach((element,index)=>{
        if(element==this.selectedRow)  this.binded_instructions.splice(index,1);
     });
     this.dataSource._updateChangeSubscription();
    }else
    {
      alert("Nije selektovana instrukcija za brisanje");
    }
    
  }
  
  ExecuteRow()
  {
    if(this.selectedRowIndex!=-1)
    {
      this.binded_instructions.forEach((element,index)=>{
        if(element==this.selectedRow) 
        {
          if(this.binded_instructions[index].executed==false)
          {
            this.binded_instructions[index].executed=true;
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
  deleteAll()
  {
    this.binded_instructions.splice(0,this.binded_instructions.length);
    this.dataSource._updateChangeSubscription();
    this.selectedRow=null;
    this.selectedRowIndex=-1;
  }
  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
        if (result !== undefined) {
            if (result !== 'no') {
              const enabled = "Y"
                console.log(result);
            } else if (result === 'no') {
               console.log('User clicked no.');
            }
        }
    })
  }

    onSend(form: NgForm){  
      if(form.status === 'INVALID')
      {
        // display error in your form
      }else{
         
          this.dialog.closeAll(); 
          let instrukcija=new Instrukcija(this.binded_instructions.length+1,form.value.description,this.element.id.toString(),this.element.type);
          this.binded_instructions.push(instrukcija);
          this.dataSource._updateChangeSubscription();
      }
      
    }
    close()
    {
      this.dialog.closeAll();
    }
    onSave(){
      this.instructionList = new Array<Instrukcija>();
      this.instructionList = this.binded_instructions;
      this.ws.instructionsEmitChange(this.instructionList);
      this.router.navigate(['/new-workplan/new-workplan-instructions']);
    }


 

}
