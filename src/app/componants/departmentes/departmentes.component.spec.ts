import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentesComponent } from './departmentes.component';

describe('DepartmentesComponent', () => {
  let component: DepartmentesComponent;
  let fixture: ComponentFixture<DepartmentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartmentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
