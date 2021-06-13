import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanInstructionsComponent } from './workplan-instructions.component';

describe('WorkplanInstructionsComponent', () => {
  let component: WorkplanInstructionsComponent;
  let fixture: ComponentFixture<WorkplanInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
