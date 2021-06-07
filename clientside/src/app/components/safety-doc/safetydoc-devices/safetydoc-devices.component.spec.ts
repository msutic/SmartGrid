import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocDevicesComponent } from './safetydoc-devices.component';

describe('SafetydocDevicesComponent', () => {
  let component: SafetydocDevicesComponent;
  let fixture: ComponentFixture<SafetydocDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
