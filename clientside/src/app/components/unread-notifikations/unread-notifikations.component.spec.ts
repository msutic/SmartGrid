import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreadNotifikationsComponent } from './unread-notifikations.component';

describe('UnreadNotifikationsComponent', () => {
  let component: UnreadNotifikationsComponent;
  let fixture: ComponentFixture<UnreadNotifikationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnreadNotifikationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreadNotifikationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
