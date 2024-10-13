import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsPaginationComponent } from './clinics-pagination.component';

describe('ClinicsPaginationComponent', () => {
  let component: ClinicsPaginationComponent;
  let fixture: ComponentFixture<ClinicsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClinicsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
