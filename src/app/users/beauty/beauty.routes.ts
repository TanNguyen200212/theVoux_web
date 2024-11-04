
import { Routes } from '@angular/router';
import { BeautyComponent } from './beauty.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';
export const beautyRoutes: Routes = [

  {
    path: '',
    component: BeautyComponent,
    children: [
        {
              path: 'detail',
              // component: BeautyDetailComponent,
              loadChildren: () =>
                import('./beauty-detail/beauty-detail.routes').then((m) => m.beautyDetailRoutes),
        },
    ],
  },

  // {
  //   path: '',
  //   component: BeautyComponent,
  // },
  // {
  //   path: 'beauty-detail',
  //   component: BeautyDetailComponent,
  // },
];
