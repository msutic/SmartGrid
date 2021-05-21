import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  constructor() {
   }


  ngOnInit(): void {
  }

}
