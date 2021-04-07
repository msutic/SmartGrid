import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafetydocComponent } from './new-safetydoc.component';

describe('NewSafetydocComponent', () => {
  let component: NewSafetydocComponent;
  let fixture: ComponentFixture<NewSafetydocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafetydocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafetydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
