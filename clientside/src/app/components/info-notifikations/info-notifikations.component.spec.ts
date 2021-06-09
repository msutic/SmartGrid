import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNotifikationsComponent } from './info-notifikations.component';

describe('InfoNotifikationsComponent', () => {
  let component: InfoNotifikationsComponent;
  let fixture: ComponentFixture<InfoNotifikationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoNotifikationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNotifikationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
