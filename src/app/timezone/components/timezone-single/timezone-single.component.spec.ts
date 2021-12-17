import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneSingleComponent } from './timezone-single.component';

describe('TimezoneSingleComponent', () => {
  let component: TimezoneSingleComponent;
  let fixture: ComponentFixture<TimezoneSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
