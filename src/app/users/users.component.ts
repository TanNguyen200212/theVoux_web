import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './home-page/header/header.component';
import { NavComponent } from './home-page/nav/nav.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BeautyComponent } from './beauty/beauty.component';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomePageComponent,
    BeautyComponent,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {}
