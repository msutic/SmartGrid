import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { SafetydocChecklist } from 'src/app/entities/safetydocs/safetydoc-checklist';
import { SafetydocService } from 'src/app/services/safetydoc/safetydoc.service';

@Component({
  selector: 'app-safetydoc-checklist',
  templateUrl: './safetydoc-checklist.component.html',
  styleUrls: ['./safetydoc-checklist.component.css']
})
export class SafetydocChecklistComponent implements OnInit {

  color: ThemePalette = 'primary';
  checked = false;

  checklistForm: FormGroup;

  safetydocChecklist: SafetydocChecklist;

  constructor(private safetydocService: SafetydocService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.checklistForm = new FormGroup({
      'workOperationsCompleted': new FormControl(false),
      'tagsRemoved': new FormControl(false),
      'groundingRemoved': new FormControl(false),
      'readyForService': new FormControl(false),
    })
  }

  onSave(){
    this.safetydocChecklist = new SafetydocChecklist(
      this.checklistForm.value.workOperationsCompleted,
      this.checklistForm.value.tagsRemoved,
      this.checklistForm.value.groundingRemoved,
      this.checklistForm.value.readyForService,
    );

    this.safetydocService.checklistEmitChange(this.safetydocChecklist);
    
  }

}
