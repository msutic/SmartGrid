import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-basic-info',
  templateUrl: './incident-basic-info.component.html',
  styleUrls: ['./incident-basic-info.component.css']
})
export class IncidentBasicInfoComponent implements OnInit {

  value = 'WR 5';
  valueDesc = '';
  constructor() { }

  ngOnInit(): void {
  }

}
