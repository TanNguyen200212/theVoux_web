import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
// import { AdminComponent } from './admin/admin.component';
// import { UsersComponent } from './users/users.component';
// import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
// import { PostNewsComponent } from './admin/pages/dashboard/post-news/post-news.component';
// import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';
export const appRoutes: Routes = [
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  // { path: 'users', component: UsersComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: 'users', pathMatch: 'full' },

  {
    path: '',
    redirectTo: '/users/home-page',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.routes').then((m) => m.usersRoutes),
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },

  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   children: [
  //     {
  //       path: 'home-page',
  //       loadChildren: () => import('./users/home-page/home-page.routes').then(m => m.homePageRoutes)
  //     },
  //     {
  //       path: 'beauty',
  //       loadChildren: () => import('./users/beauty/beauty.routes').then(m => m.beautyRoutes)
  //     }
  //   ]
  // },

  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./admin/pages/dashboard/dashboard.routes').then(x => x.dashboardRoutes)
  //     },
  //     {
  //       path: 'other',
  //       component: AdminLayoutComponent,
  //       children: [
  //           {
  //         path: '',
  //         loadChildren: () => import('./admin/layouts/admin-layout/admin-layout.routes').then(x => x.adminLayoutRoutes)
  //     },
  //     {
  //       path: 'user ',
  //       loadChildren: () => import('./admin/pages/user/user.routes').then(x => x.userRoutes)
  //   }
  //   ],
  //   },
  //   ]
  // }
];
