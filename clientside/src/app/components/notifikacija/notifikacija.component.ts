import { Component, OnInit } from '@angular/core';
import { SettingsServiceService } from 'src/app/services/settings-service.service';
import {Notifikacija} from '../../entities/notifikacija';

@Component({
  selector: 'app-notifikacija',
  templateUrl: './notifikacija.component.html',
  styleUrls: ['./notifikacija.component.css']
})
export class NotifikacijaComponent implements OnInit {
  sve:Notifikacija[]=[];
  neprocitane:Notifikacija[]=[];

  constructor(public sss:SettingsServiceService) { 
    var neprocitana=new Notifikacija("warning","warning jbg",new Date());
    var procitana=new Notifikacija("error","error jbg",new Date());
    procitana.procitana=true;
    this.sve.push(neprocitana);
    this.sve.push(neprocitana);
  }

  ngOnInit(): void {
  }

}
