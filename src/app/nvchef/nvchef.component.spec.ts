import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvchefComponent } from './nvchef.component';

describe('NvchefComponent', () => {
  let component: NvchefComponent;
  let fixture: ComponentFixture<NvchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NvchefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NvchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
