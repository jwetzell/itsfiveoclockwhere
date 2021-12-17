import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveoclockComponent } from './fiveoclock.component';

describe('FiveoclockComponent', () => {
  let component: FiveoclockComponent;
  let fixture: ComponentFixture<FiveoclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveoclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveoclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
