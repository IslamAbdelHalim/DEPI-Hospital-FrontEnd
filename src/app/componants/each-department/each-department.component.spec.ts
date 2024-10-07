import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachDepartmentComponent } from './each-department.component';

describe('EachDepartmentComponent', () => {
  let component: EachDepartmentComponent;
  let fixture: ComponentFixture<EachDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
