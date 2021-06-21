import { Workplan } from 'src/app/entities/workplan';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import {FileUploadService } from  '../../services/file-upload.service';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { MultimediaWorkplan } from 'src/app/entities/multimedia-workplan';
import { WorkplanService } from 'src/app/services/workplan.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-images',
  templateUrl: './test-images.component.html',
  styleUrls: ['./test-images.component.css']
})
export class TestImagesComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  workplans:Array<Workplan>;
  urls:Array<string>=[];
  urls1:Array<string>=[];
  imageToShow:any;
  mw:MultimediaWorkplan=new MultimediaWorkplan(this.urls);
  constructor(public ws:WorkplanService,private uploadService: FileUploadService, public router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.ws.loadWorkplans().subscribe(
      res=>{
        this.workplans=res;
        this.mw=JSON.parse(this.workplans[1].multimedia.toString());
        

        alert("a");
      }
    )
  }




}
