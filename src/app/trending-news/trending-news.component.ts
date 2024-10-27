import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.css'],
})
export class TrendingNewsComponent {
  // items = [
  //   { title: 'Slide 1', image: 'https://via.placeholder.com/400x300?text=Slide+1' },
  //   { title: 'Slide 2', image: 'https://via.placeholder.com/400x300?text=Slide+2' },
  //   { title: 'Slide 3', image: 'https://via.placeholder.com/400x300?text=Slide+3' },
  // ];

  // currentIndex = 0;

  // nextSlide() {
  //   this.currentIndex = (this.currentIndex + 1) % this.items.length;
  // }

  // prevSlide() {
  //   this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  // }
}
