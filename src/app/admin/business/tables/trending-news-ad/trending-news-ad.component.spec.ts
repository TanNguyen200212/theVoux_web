import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNewsAdComponent } from './trending-news-ad.component';

describe('TrendingNewsAdComponent', () => {
  let component: TrendingNewsAdComponent;
  let fixture: ComponentFixture<TrendingNewsAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingNewsAdComponent]
    });
    fixture = TestBed.createComponent(TrendingNewsAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
