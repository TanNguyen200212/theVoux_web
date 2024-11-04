import { shoppingConfig } from './shopping.config';

import { Routes } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
export const shoppingRoutes: Routes = [
  {
    path: '',
    component: ShoppingComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products.routes').then(
            (m) => m.productsRoutes
          ),
      },
    ],
  },


];
