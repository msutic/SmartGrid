import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplanTableComponent } from './workplan-table.component';

describe('WorkplanTableComponent', () => {
  let component: WorkplanTableComponent;
  let fixture: ComponentFixture<WorkplanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplanTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
