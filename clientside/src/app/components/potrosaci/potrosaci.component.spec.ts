import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotrosaciComponent } from './potrosaci.component';

describe('PotrosaciComponent', () => {
  let component: PotrosaciComponent;
  let fixture: ComponentFixture<PotrosaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PotrosaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PotrosaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
