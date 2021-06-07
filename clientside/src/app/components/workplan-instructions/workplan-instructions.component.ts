import { AfterViewInit,TemplateRef,ViewChild, Component, OnInit,NgZone } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Instrukcija } from 'src/app/entities/instrukcija';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import {MatDialog,MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldControl} from '@angular/material/form-field';
import {FormControl, NgForm,Validators,FormBuilder,FormGroup} from '@angular/forms';

export interface EquipmentData {
  id: string;
  type:string;
  name: string;
  address: string;
  coordinates:number[];
}
const ELEMENT_DATA: EquipmentData[] = [
  {id: 'EQ 1', type: "Prekidac" ,  address: 'Vladike Ćirića 10',name:"Prekidac1", coordinates:[10,20]},
  {id: 'EQ 2', type: "Osigurac",  address: 'Subotička 10',name:"Osigurac1", coordinates:[10,30]},
  {id: 'EQ 3', type: "Transformator",   address: 'Mileve Marića 14',name:"Transformator1", coordinates:[10,40]},
  {id: 'EQ 4', type: "Diskonektor",  address: 'Masarikova 2',name:"Diskonektor1", coordinates:[10,50]},
];


@Component({
  selector: 'app-workplan-instructions',
  templateUrl: './workplan-instructions.component.html',
  styleUrls: ['./workplan-instructions.component.css']
})
export class WorkplanInstructionsComponent implements AfterViewInit {
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  binded_instructions:Instrukcija[]=[];
  
  selectedRowIndex = -1;
  selectedRow:Instrukcija=null;
  selectedElement:EquipmentData=null;
  element:EquipmentData=null;
  elements:EquipmentData[]=ELEMENT_DATA;


  constructor(public dialog:MatDialog,private ngZone: NgZone) { }

  

  displayedColumns: string[] = ['id', 'description', 'executed', 'element'];
  dataSource = new MatTableDataSource(this.binded_instructions);

  ngAfterViewInit(): void {
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
          let instrukcija=new Instrukcija(this.binded_instructions.length+1,form.value.description, form.value.izabranielement.name);
          this.binded_instructions.push(instrukcija);
          this.dataSource._updateChangeSubscription();
      }
      
    }
    close()
    {
      this.dialog.closeAll();
    }


 

}
