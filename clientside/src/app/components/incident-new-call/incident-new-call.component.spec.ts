import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentNewCallComponent } from './incident-new-call.component';

describe('IncidentNewCallComponent', () => {
  let component: IncidentNewCallComponent;
  let fixture: ComponentFixture<IncidentNewCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentNewCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentNewCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
