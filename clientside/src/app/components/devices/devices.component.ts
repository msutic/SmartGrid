import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';

export interface DeviceData {
  id: number;
  type: string;
  name: string;
  address: string;
  x_coordinate: number;
  y_coordinate: number;
}
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})

export class DevicesComponent implements OnInit {

  allDevices = new Array<Device>();

  constructor(private deviceService: DeviceService) {}

  displayedColumns: string[] = ['type', 'id', 'name', 'address', 'x_coordinate', 'y_coordinate'];
  dataSource = new MatTableDataSource(this.allDevices);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.deviceService.loadDevices().subscribe(
      (res: any) => {
        this.allDevices = res;
        this.dataSource = new MatTableDataSource(this.allDevices);
      }
    )
  }

  // loadDevices(): void {
  //   this.allDevices = this.deviceService.loadDevices();
  // }

}
