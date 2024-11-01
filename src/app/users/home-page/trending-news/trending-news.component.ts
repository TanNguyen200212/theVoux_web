

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/admin/business/posts.service';
import { Post } from 'src/app/admin/business/post.model';

@Component({
  selector: 'app-trending-news',
  standalone: true,
  imports: [CommonModule,
    HttpClientModule,

  ],
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.css'],
})
export class TrendingNewsComponent {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postsService.fetchPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(this.posts); // Xem dữ liệu trong console
    });
  }
}
