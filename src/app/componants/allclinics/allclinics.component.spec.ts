import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllclinicsComponent } from './allclinics.component';

describe('AllclinicsComponent', () => {
  let component: AllclinicsComponent;
  let fixture: ComponentFixture<AllclinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllclinicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllclinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
