import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneClosestComponent } from './timezone-closest.component';

describe('TimezoneClosestComponent', () => {
  let component: TimezoneClosestComponent;
  let fixture: ComponentFixture<TimezoneClosestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneClosestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneClosestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
