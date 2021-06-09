import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessNotifikationsComponent } from './success-notifikations.component';

describe('SuccessNotifikationsComponent', () => {
  let component: SuccessNotifikationsComponent;
  let fixture: ComponentFixture<SuccessNotifikationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessNotifikationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessNotifikationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
