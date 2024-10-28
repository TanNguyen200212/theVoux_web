
import { Routes } from '@angular/router';
import { BeautyComponent } from './beauty.component';
import { BeautyDetailComponent } from './beauty-detail/beauty-detail.component';

export const beautyRoutes: Routes = [

  // {
  //   path: '',
  //   component: BeautyComponent,
  //   children: [

  //     {
  //       path: 'list',
  //       component: BeautyDetailComponent,
  //     },
  //     {
  //       path: 'detail',
  //       component: BeautyDetailComponent,
  //     },
  //   ],
  // },

  {
    path: '',
    component: BeautyComponent,
  },
  {
    path: 'beauty-detail',
    component: BeautyDetailComponent,
  },
];