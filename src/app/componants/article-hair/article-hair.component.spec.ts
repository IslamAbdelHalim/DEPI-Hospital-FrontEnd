import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHairComponent } from './article-hair.component';

describe('ArticleHairComponent', () => {
  let component: ArticleHairComponent;
  let fixture: ComponentFixture<ArticleHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleHairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
