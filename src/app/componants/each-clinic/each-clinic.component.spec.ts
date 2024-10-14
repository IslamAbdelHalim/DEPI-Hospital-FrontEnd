import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachClinicComponent } from './each-clinic.component';

describe('EachClinicComponent', () => {
  let component: EachClinicComponent;
  let fixture: ComponentFixture<EachClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EachClinicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
