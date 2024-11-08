import { MenShirtsComponent } from './product-list/men-shirts/men-shirts.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

import { Routes } from '@angular/router';
export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () =>
          import('./product-list/product-list.routes').then(
            (m) => m.productListRoutes
          ),
      },
     
      {
        path: 'details/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];
