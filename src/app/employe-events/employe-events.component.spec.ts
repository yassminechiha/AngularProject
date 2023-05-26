import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeEventsComponent } from './employe-events.component';

describe('EmployeEventsComponent', () => {
  let component: EmployeEventsComponent;
  let fixture: ComponentFixture<EmployeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
