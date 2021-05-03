import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-workplan-multimedia',
  templateUrl: './new-workplan-multimedia.component.html',
  styleUrls: ['./new-workplan-multimedia.component.css']
})
export class NewWorkplanMultimediaComponent implements OnInit {


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
