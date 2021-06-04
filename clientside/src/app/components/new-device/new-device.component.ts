import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  @ViewChild('f') courseForm: NgForm;

  newDevice : Device;
  constructor(private router: Router, private deviceService: DeviceService) {}

  ngOnInit(): void {
  }

  onClickSubmit(form: NgForm){
    this.newDevice = new Device(form.value.type, form.value.address, parseInt(form.value.x_coordinate), parseInt(form.value.y_coordinate));
    
    this.deviceService.addNewDevice(this.newDevice).subscribe(
      (res) => {
        this.router.navigate(['dashboard']);
      }
    )
    
  }

}
