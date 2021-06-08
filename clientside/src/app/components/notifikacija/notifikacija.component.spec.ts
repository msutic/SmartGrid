import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifikacijaComponent } from './notifikacija.component';

describe('NotifikacijaComponent', () => {
  let component: NotifikacijaComponent;
  let fixture: ComponentFixture<NotifikacijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifikacijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifikacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
