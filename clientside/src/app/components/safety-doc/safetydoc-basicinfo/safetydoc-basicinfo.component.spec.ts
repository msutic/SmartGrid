import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocBasicinfoComponent } from './safetydoc-basicinfo.component';

describe('SafetydocBasicinfoComponent', () => {
  let component: SafetydocBasicinfoComponent;
  let fixture: ComponentFixture<SafetydocBasicinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocBasicinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocBasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
