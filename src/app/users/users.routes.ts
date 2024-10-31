
import { Routes } from '@angular/router';
// import { UserComponent } from '../admin/pages/user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BeautyComponent } from './beauty/beauty.component';
import { UsersComponent } from './users.component';
export const usersRoutes: Routes = [
  // {
  //   path: 'users',
  //   component: UserComponent,
  //   children: [
  //     {
  //       path: 'beauty',
  //       loadChildren: () =>
  //         import('./beauty/beauty.routes').then((m) => m.beautyRoutes),
  //     },
  //     {
  //       path: 'home-page',
  //       loadChildren: () =>
  //         import('./home-page/home-page.routes').then((m) => m.homePageRoutes),
  //     },

  //     { path: '', redirectTo: 'home-page', pathMatch: 'full' },
  //     { path: '**', redirectTo: 'home-page' },
  //   ],
  // },

  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'home-page',
        loadChildren: () => import('./home-page/home-page.routes').then(m => m.homePageRoutes)
      },
      {
        path: 'beauty',
        loadChildren: () => import('./beauty/beauty.routes').then(m => m.beautyRoutes)
      }
    ]
  },
];
