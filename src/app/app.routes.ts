import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
export const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'home-page',
        loadChildren: () =>
          import('./home-page/home.routes').then((m) => m.homePageRoutes),
      },
      { path: '', redirectTo: '/home-page', pathMatch: 'full' },
      { path: '**', redirectTo: '/home-page' },
    ],
    // resolve: { translate: translateResolver },
  },
];
