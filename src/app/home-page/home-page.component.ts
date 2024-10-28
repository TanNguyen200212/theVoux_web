import { HeadingComponent } from './heading/heading.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { TrendingNewsComponent } from './trending-news/trending-news.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,

    BannerComponent,
    TrendingNewsComponent,
    NewsLetterComponent,
    LatestArticlesComponent,
    HeadingComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
