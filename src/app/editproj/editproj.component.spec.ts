import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojComponent } from './editproj.component';

describe('EditprojComponent', () => {
  let component: EditprojComponent;
  let fixture: ComponentFixture<EditprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprojComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
