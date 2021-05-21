import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-safetydoc-checklist',
  templateUrl: './safetydoc-checklist.component.html',
  styleUrls: ['./safetydoc-checklist.component.css']
})
export class SafetydocChecklistComponent implements OnInit {

  color: ThemePalette = 'primary';
  checked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
