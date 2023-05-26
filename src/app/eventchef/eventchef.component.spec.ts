import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventchefComponent } from './eventchef.component';

describe('EventchefComponent', () => {
  let component: EventchefComponent;
  let fixture: ComponentFixture<EventchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventchefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
