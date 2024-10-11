import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsPaginationComponent } from './doctors-pagination.component';

describe('DoctorsPaginationComponent', () => {
  let component: DoctorsPaginationComponent;
  let fixture: ComponentFixture<DoctorsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
