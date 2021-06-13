import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Call } from 'src/app/entities/call';
import { IncidentService } from 'src/app/services/incident/incident.service';
declare var $:any;
@Component({
  selector: 'app-incident-new-call',
  templateUrl: './incident-new-call.component.html',
  styleUrls: ['./incident-new-call.component.css']
})
export class IncidentNewCallComponent implements OnInit {
  
  consumers = ['Marko', 'Miljana', 'Vlada', 'Rada'];
  selectedConsumer: string;

  closeResult = '';

  newCallForm: FormGroup;
  newIncidentCall: Call;

  constructor(private modalService: NgbModal, private incidentService: IncidentService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  initForm(){
    this.newCallForm = new FormGroup({
      'reason': new FormControl(),
      'comment': new FormControl(),
      'hazard': new FormControl(),
      'address': new FormControl()
    });
  }

  onClickSubmit(){
    if(this.newCallForm.value.reason == null || this.newCallForm.value.hazard == null || 
      this.newCallForm.value.address == null){
        alert("Invalid input. Some fields are left empty.")
      } else {
        this.newIncidentCall = new Call(this.newCallForm.value.reason,
          this.newCallForm.value.comment,this.newCallForm.value.hazard, this.newCallForm.value.address);
      
          this.incidentService.addNewIncidentCall(this.newIncidentCall);
    
          this.router.navigate(['/incidents/new/calls']);
      }
    
    }

  

}
