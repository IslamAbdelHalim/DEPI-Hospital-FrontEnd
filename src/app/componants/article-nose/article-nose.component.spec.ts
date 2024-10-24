import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNoseComponent } from './article-nose.component';

describe('ArticleNoseComponent', () => {
  let component: ArticleNoseComponent;
  let fixture: ComponentFixture<ArticleNoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleNoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleNoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
