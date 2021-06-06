import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';
import { IncidentService } from 'src/app/services/incident/incident.service';

export interface IncidentData {
  id: number;
  name: string;
  type: string;
  coordinates: string;
  address: string;
}

@Component({
  selector: 'app-incident-devices',
  templateUrl: './incident-devices.component.html',
  styleUrls: ['./incident-devices.component.css']
})
export class IncidentDevicesComponent implements OnInit {

  devicesList: Array<Device>;

  displayedColumns: string[] = ['id', 'name', 'type', 'x_coordinate', 'y_coordinate', 'address', 'action'];
  
  closeResult = '';
  @Input() allDevices = new Array<Device>();
  @Input() selectedDevices = new Array<Device>();
  @Input() allDevicesFilter = new Array<Device>();

  allDevicesDataSource = new MatTableDataSource(this.allDevices);
  selectedDevicesDataSource = new MatTableDataSource(this.selectedDevices);

  constructor(private router: Router, private modalService: NgbModal, private incidentService: IncidentService, private deviceService: DeviceService){
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.deviceService.loadDevices().subscribe(
      res => {
        this.allDevices = res;
        this.allDevicesDataSource = new MatTableDataSource(this.allDevices);
        this.allDevicesDataSource.sort = this.sort;
        this.allDevicesDataSource.paginator = this.paginator;
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
    this.incidentService.devicesEmitChange(this.devicesList);
    this.router.navigate(['/incidents/new/resolution']);
  }

}
