import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'beauty',
        loadChildren: () =>
          import('./beauty/beauty.routes').then((m) => m.beautyRoutes),
      },
      {
        path: 'home-page',
        loadChildren: () =>
          import('./home-page/home.routes').then((m) => m.homePageRoutes),
      },
      { path: '', redirectTo: 'home-page', pathMatch: 'full' },
      { path: '**', redirectTo: 'home-page' },
    ],
    // resolve: { translate: translateResolver },
  },
];
