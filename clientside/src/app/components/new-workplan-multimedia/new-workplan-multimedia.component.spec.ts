import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkplanMultimediaComponent } from './new-workplan-multimedia.component';

describe('NewWorkplanMultimediaComponent', () => {
  let component: NewWorkplanMultimediaComponent;
  let fixture: ComponentFixture<NewWorkplanMultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWorkplanMultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkplanMultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
