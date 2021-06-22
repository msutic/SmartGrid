import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanPreviewComponent } from './workplan-preview.component';

describe('WorkplanPreviewComponent', () => {
  let component: WorkplanPreviewComponent;
  let fixture: ComponentFixture<WorkplanPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
