import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkplanBasicinfoComponent } from './new-workplan-basicinfo.component';

describe('NewWorkplanBasicinfoComponent', () => {
  let component: NewWorkplanBasicinfoComponent;
  let fixture: ComponentFixture<NewWorkplanBasicinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkplanBasicinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkplanBasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
