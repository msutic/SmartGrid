import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningNotifikationsComponent } from './warning-notifikations.component';

describe('WarningNotifikationsComponent', () => {
  let component: WarningNotifikationsComponent;
  let fixture: ComponentFixture<WarningNotifikationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningNotifikationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningNotifikationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
