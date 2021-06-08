import { Component, OnInit } from '@angular/core';
import {Notifikacija} from '../../entities/notifikacija';

@Component({
  selector: 'app-notifikacija',
  templateUrl: './notifikacija.component.html',
  styleUrls: ['./notifikacija.component.css']
})
export class NotifikacijaComponent implements OnInit {
  sve:Notifikacija[]=[];
  neprocitane:Notifikacija[]=[];

  constructor() { 
    var neprocitana=new Notifikacija("warning","warning jbg",new Date(),"warning");
    var procitana=new Notifikacija("error","error jbg",new Date(),"error");
    procitana.procitana=true;
    this.sve.push(neprocitana);
    this.sve.push(neprocitana);
  }

  ngOnInit(): void {
  }

}
