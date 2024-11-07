import { MenShirtsComponent } from './men-shirts/men-shirts.component';
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
        path: 'product-detail',
        component: ProductDetailComponent,
      },
      {
        path: 'men-shirts',
        loadChildren: () =>
          import('./men-shirts/men-shirts.routes').then(
            (m) => m.menShirtsRoutes
          ),
      },
      {
        path: 'men-pants',
        loadChildren: () =>
          import('./men-pants/men-pants.routes').then((m) => m.menPantsRoutes),
      },
      {
        path: 'shoes',
        loadChildren: () =>
          import('./shoes/shoes.routes').then((m) => m.shoesRoutes),
      },
      {
        path: 'accessories',
        loadChildren: () =>
          import('./accessories/accessories.routes').then(
            (m) => m.accessoriesRoutes
          ),
      },
    ],
  },
];
