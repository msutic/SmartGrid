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

@Component({
  selector: 'app-new-workplan-multimedia',
  templateUrl: './new-workplan-multimedia.component.html',
  styleUrls: ['./new-workplan-multimedia.component.css']
})
export class NewWorkplanMultimediaComponent implements OnInit {
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files  = []; 
  urls = new Array<string>();
  newWorkplanMultimedia:MultimediaWorkplan;
  constructor(private uploadService: FileUploadService,public ws:WorkplanService, public router:Router) { }

  ngOnInit()
  {

  }

  uploadFile(file) {  
   
    
    const formData = new FormData();  
    formData.append('file', file.data);  
    file.inProgress = true;  
    this.uploadService.upload(formData).pipe(  
      map(event => {  
        switch (event.type) {  
          case HttpEventType.UploadProgress:  
            file.progress = Math.round(event.loaded * 100 / event.total);  
            break;  
          case HttpEventType.Response:  
            return event;  
          
        }
        
      }),  
      catchError((error: HttpErrorResponse) => {  
        file.inProgress = false;  
        return of(`${file.data.name} upload failed.`);  
      })).subscribe((event: any) => {  
        if (typeof (event) === 'object') {  
          console.log(event.body);  
        }  
      });  
  }

  private uploadFiles() {  
    this.fileUpload.nativeElement.value = '';  
    this.files.forEach(file => {  
      this.uploadFile(file);  
    });  
}

onClick() {  
  const fileUpload = this.fileUpload.nativeElement;
  fileUpload.onchange = () => {  
  for (let index = 0; index < fileUpload.files.length; index++)  
  {  
   const file = fileUpload.files[index];  
   this.files.push({ data: file, inProgress: false, progress: 0});  
  }  
    this.uploadFiles();  
  };  
  fileUpload.click();  
}

detectFiles(event: any) {
  this.urls = [];
  let files = event.target.files;
  if (files) {
    for (let file of files) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      }
      reader.readAsDataURL(file);
    }
  }
}

onSaveClick(){
  this.newWorkplanMultimedia = new MultimediaWorkplan(this.urls);

  this.ws.multimediaEmitChange(this.newWorkplanMultimedia); 
  this.router.navigate(['/new-workplan/workplan-devices']);
}
  
  

}
