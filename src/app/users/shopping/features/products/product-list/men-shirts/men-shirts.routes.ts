import { Routes } from '@angular/router';
import { MenShirtsComponent } from './men-shirts.component';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
export const menShirtsRoutes: Routes = [
  {
    path: '',
    component: MenShirtsComponent,
  },
  { path: 'details/:id', component: ProductDetailComponent },
];
