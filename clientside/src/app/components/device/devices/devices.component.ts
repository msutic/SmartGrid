import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {

  allDevices = new Array<Device>();
  deletedDevice: Device;

  constructor(private deviceService: DeviceService) {}

  displayedColumns: string[] = ['type', 'id', 'name', 'address', 'x_coordinate', 'y_coordinate', 'action'];
  dataSource = new MatTableDataSource(this.allDevices);

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.deviceService.loadDevices().subscribe(
      (res: any) => {
        this.allDevices = res;
        this.dataSource = new MatTableDataSource(this.allDevices);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        
      }
    )
  }

  onDelete(id: number){
    var userRole = JSON.parse(localStorage.getItem('sessionUserRole'));
    if(userRole == 'admin'){
      this.deletedDevice = this.allDevices.find(e => e.id == id);
    this.deviceService.deleteDevice(this.deletedDevice).subscribe(
      (res) => {
        //this.dataSource = new MatTableDataSource(this.allDevices);
        this.fetchData();
      }
    )
    } else {
      alert('Not authorized!!');
    }
    
  }

  fetchData(){
    this.deviceService.loadDevices().subscribe(
      data => {this.dataSource = data;}
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
