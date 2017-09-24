import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendaritemComponent } from './calendaritem.component';

describe('CalendaritemComponent', () => {
  let component: CalendaritemComponent;
  let fixture: ComponentFixture<CalendaritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendaritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
