import { Component, OnInit } from '@angular/core';
import { Podesavanja } from 'src/app/entities/podesavanja';
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
  podesavanja:Podesavanja=new Podesavanja(true,true,true,true,true);

  constructor(public sss:SettingsServiceService) { 
    this.sss.getSettings().subscribe(
      res=>{
        this.podesavanja=res;
      }
    )
  }

  ngOnInit(): void {
    
  }

}
