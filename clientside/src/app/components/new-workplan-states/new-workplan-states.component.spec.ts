import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkplanStatesComponent } from './new-workplan-states.component';

describe('NewWorkplanStatesComponent', () => {
  let component: NewWorkplanStatesComponent;
  let fixture: ComponentFixture<NewWorkplanStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkplanStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkplanStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
