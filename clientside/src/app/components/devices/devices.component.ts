import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class DevicesComponent implements AfterViewInit {

  allDevices: Array<Device>;

  constructor(private deviceService: DeviceService) { 
    this.allDevices = new Array<Device>();
    this.loadDevices();
  }

  displayedColumns: string[] = ['type', 'id', 'name', 'address', 'coordinates'];
  dataSource = new MatTableDataSource(this.deviceService.loadDevices());

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadDevices(): void {
    this.allDevices = this.deviceService.loadDevices();
  }

}
