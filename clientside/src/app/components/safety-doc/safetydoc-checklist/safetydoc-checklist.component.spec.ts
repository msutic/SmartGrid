import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocChecklistComponent } from './safetydoc-checklist.component';

describe('SafetydocChecklistComponent', () => {
  let component: SafetydocChecklistComponent;
  let fixture: ComponentFixture<SafetydocChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
