import { ConfigurableFocusTrapConfig } from '@angular/cdk/a11y/focus-trap/configurable-focus-trap-config';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { WorkplanService } from 'src/app/services/workplan.service';


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
  selector: 'app-workplan-equipment',
  templateUrl: './workplan-equipment.component.html',
  styleUrls: ['./workplan-equipment.component.css']
})
export class WorkplanEquipmentComponent implements OnInit {
  devicesList: Array<Device>;

  displayedColumns: string[] = ['id', 'name', 'type', 'x_coordinate', 'y_coordinate', 'address', 'action'];
  
  closeResult = '';
  @Input() allDevices = new Array<Device>();
  @Input() selectedDevices = new Array<Device>();
  @Input() allDevicesFilter = new Array<Device>();

  allDevicesDataSource = new MatTableDataSource(this.allDevices);
  selectedDevicesDataSource = new MatTableDataSource(this.selectedDevices);
  constructor(private router: Router, private modalService: NgbModal, private incidentService: IncidentService, private deviceService: DeviceService,private ws:WorkplanService)
  { 
    


  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.deviceService.loadDevices().subscribe(
      res => {
        this.allDevices = res;
        this.allDevicesDataSource = new MatTableDataSource(this.allDevices);
      }
    )
  }
  open(content: any) {
    this.modalService.open(content, {windowClass: "myCustomModalClass"});
  }

  RemoveDevice(i: any){
    let dev = this.allDevices.find(e => e.id == i)
    for(var j = 0; j< this.selectedDevices.length; j++ ){
      if(this.selectedDevices[j].id == i){
        this.selectedDevices.splice(j, 1);
      }
    }
    this.selectedDevicesDataSource = new MatTableDataSource(this.selectedDevices);
    this.selectedDevicesDataSource.sort = this.sort;
      this.selectedDevicesDataSource.paginator = this.paginator;
  }

  SelectDevice(i: any){
    let dev = this.allDevices.find(e=> e.id == i);
    if(this.selectedDevices.includes(dev)){
      alert('This device has already been added');
    } else {
      this.selectedDevices.push(dev);
      this.selectedDevicesDataSource = new MatTableDataSource(this.selectedDevices);
      this.selectedDevicesDataSource.sort = this.sort;
      this.selectedDevicesDataSource.paginator = this.paginator;
    }
   
  }

  onSave(){
    this.devicesList = new Array<Device>();
    this.devicesList = this.selectedDevices;
    this.ws.devicesEmitChange(this.devicesList);
    this.router.navigate(['/new-workplan/new-workplan-instructions']);
  }

}
