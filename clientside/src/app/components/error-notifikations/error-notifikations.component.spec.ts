import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorNotifikationsComponent } from './error-notifikations.component';

describe('ErrorNotifikationsComponent', () => {
  let component: ErrorNotifikationsComponent;
  let fixture: ComponentFixture<ErrorNotifikationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorNotifikationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotifikationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
