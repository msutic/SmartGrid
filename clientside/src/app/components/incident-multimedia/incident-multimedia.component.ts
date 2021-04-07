import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-multimedia',
  templateUrl: './incident-multimedia.component.html',
  styleUrls: ['./incident-multimedia.component.css']
})
export class IncidentMultimediaComponent implements OnInit {

  urls = new Array<string>();
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

  constructor() { }

  ngOnInit(): void {
  }

}
