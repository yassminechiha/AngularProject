import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechefComponent } from './homechef.component';

describe('HomechefComponent', () => {
  let component: HomechefComponent;
  let fixture: ComponentFixture<HomechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
