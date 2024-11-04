

import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
export const productListRoutes: Routes = [

  {
    path: '',
    component: ProductListComponent,
//     children: [
//       {
//         path: 'menshirts',
//         loadChildren: () => import('./men-shirts/men-shirts.routes').then(m => m.menShirtsRoutes)
//       },
//  ],
 }

  // {
  //   path: '',
  //   component: BeautyComponent,
  // },
  // {
  //   path: 'beauty-detail',
  //   component: BeautyDetailComponent,
  // },
];
