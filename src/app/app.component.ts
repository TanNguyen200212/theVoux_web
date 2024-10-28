import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BeautyComponent } from './beauty/beauty.component';
import { HeaderComponent } from './home-page/header/header.component';
import { NavComponent } from './home-page/nav/nav.component';
import { FooterComponent } from './home-page/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavComponent,
    HomePageComponent,
    BeautyComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'theVoux_web';
}
