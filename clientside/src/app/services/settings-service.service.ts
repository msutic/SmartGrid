import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsServiceService {
  nonrequiredvisible:boolean;
  warrningsvisible:boolean=true;
  infosvisible:boolean=true;
  errorsvisible:boolean=true;
  successesvisible:boolean=true;
  constructor() { }
}
