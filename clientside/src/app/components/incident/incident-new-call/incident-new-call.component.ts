import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
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

  

}
