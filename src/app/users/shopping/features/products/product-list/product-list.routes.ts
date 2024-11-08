import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
export const productListRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
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
