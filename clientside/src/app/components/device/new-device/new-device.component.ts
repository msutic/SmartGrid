import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/entities/device';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {
  deviceId: string = '';
  edit: boolean;
  
  newDeviceFormGroup:FormGroup;

  newDevice : Device;
  constructor(private router: Router, private deviceService: DeviceService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get("id");
    if(this.deviceId != null){
      this.edit = true;
      this.deviceService.getDevice(+this.deviceId).subscribe(
        (res: any) => {
          this.newDevice = res;
          this.createForm();
        }
      )
    }else {
      this.edit = false;
    }
    this.initForm();
  }

  private initForm() {
    this.newDeviceFormGroup = new FormGroup({
      'type': new FormControl(),
      'id': new FormControl(),
      'name': new FormControl(),
      'address' : new FormControl(),
      "x_coordinate":new FormControl(),
      "y_coordinate":new FormControl(),
    });
  }

  createForm(){
    this.newDeviceFormGroup = new FormGroup({
      "type": new FormControl(this.newDevice.type),
      "id":new FormControl(this.newDevice.id),
      "name":new FormControl(this.newDevice.name),
      "address":new FormControl(this.newDevice.address),
      "x_coordinate":new FormControl(this.newDevice.x_coordinate),
      "y_coordinate":new FormControl(this.newDevice.y_coordinate),
    });
  }

  onClickSubmit(){
    if(this.edit){ 
      this.newDevice.type = this.newDeviceFormGroup.value.type;
      this.newDevice.address = this.newDeviceFormGroup.value.address;
      this.newDevice.x_coordinate = parseFloat(this.newDeviceFormGroup.value.x_coordinate);
      this.newDevice.y_coordinate = parseFloat(this.newDeviceFormGroup.value.y_coordinate);
      this.deviceService.updateDevice(this.newDevice).subscribe(
        (res) => {
          this.router.navigate(['devices']);
        }
      )
    } else {
      if(this.newDeviceFormGroup.value.type == null || this.newDeviceFormGroup.value.address == null ||
        this.newDeviceFormGroup.value.x_coordinate == null || this.newDeviceFormGroup.value.y_coordinate == null){
          alert("Denied! Some fields are left empty.")
        } else {
          this.newDevice = new Device(this.newDeviceFormGroup.value.type, this.newDeviceFormGroup.value.address, parseFloat(this.newDeviceFormGroup.value.x_coordinate), parseFloat(this.newDeviceFormGroup.value.y_coordinate));
    
          this.deviceService.addNewDevice(this.newDevice).subscribe(
            (res) => {
              this.router.navigate(['devices']);
            }
          )
        }
      
    }
    
    
  }

}
