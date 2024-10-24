import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePressureComponent } from './article-pressure.component';

describe('ArticlePressureComponent', () => {
  let component: ArticlePressureComponent;
  let fixture: ComponentFixture<ArticlePressureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlePressureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
