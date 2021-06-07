import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/entities/device';
import { Safetydoc } from 'src/app/entities/safetydocs/safetydoc';
import { SafetydocBasicInfo } from 'src/app/entities/safetydocs/safetydoc-basic-info';
import { SafetydocChecklist } from 'src/app/entities/safetydocs/safetydoc-checklist';
import { SafetydocService } from 'src/app/services/safetydoc/safetydoc.service';

@Component({
  selector: 'app-new-safetydoc',
  templateUrl: './new-safetydoc.component.html',
  styleUrls: ['./new-safetydoc.component.css']
})
export class NewSafetydocComponent implements OnInit {

  newSafetyDoc: Safetydoc;
  safetydocBasicInfo: SafetydocBasicInfo;
  safetydocDevices: Array<Device>;
  safetydocChecklist: SafetydocChecklist;

  constructor(private safetydocService: SafetydocService, private router: Router) { }

  ngOnInit(): void {
    this.safetydocService.changeEmittedBasicInfo$.subscribe(
      res => {
        this.safetydocBasicInfo = res;
      }
    )

    this.safetydocService.changeEmittedDevices$.subscribe(
      res => {
        this.safetydocDevices = res;
      }
    )

    this.safetydocService.changeEmittedChecklist$.subscribe(
      res => {
        this.safetydocChecklist = res;
      }
    )
  }

  onSubmit(){
    if(this.safetydocBasicInfo == null || this.safetydocDevices == null || this.safetydocChecklist == null){
      alert('Denied! Check input!');
    } else {
      this.newSafetyDoc = new Safetydoc(
        this.safetydocBasicInfo.status,
        this.safetydocBasicInfo.type,
        this.safetydocBasicInfo.switchingPlan,
        this.safetydocBasicInfo.safetyDocType,
        new Date(Date.now()),
        this.safetydocBasicInfo.phoneNo,
        this.safetydocBasicInfo.crew,
        this.safetydocBasicInfo.creator,
        this.safetydocBasicInfo.details,
        this.safetydocBasicInfo.notes,

        this.safetydocChecklist.workOperationsCompleted,
        this.safetydocChecklist.tagsRemoved,
        this.safetydocChecklist.groundingRemoved,
        this.safetydocChecklist.readyForService
      );

      this.safetydocService.addNewSafetydoc(this.newSafetyDoc).subscribe(
        res => {
          this.router.navigate(['safetydocs']);
        }
      )
    }
  }

}
