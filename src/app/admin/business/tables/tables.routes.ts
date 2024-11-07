import { Routes } from '@angular/router';
import TablesComponent from './tables.component';
import { TrendingNewsAdComponent } from './trending-news-ad/trending-news-ad.component';
import { ProductsAdComponent } from './products-ad/products-ad.component';
export const tablesRoutes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'trending-news-ad',
       component: TrendingNewsAdComponent,
      },
      {
        path: 'products-ad',
       component: ProductsAdComponent,
      },
    ],
  },
  {path:'trending-news-ad', redirectTo: 'trending-news-ad', pathMatch: 'full'},
  { path: '**', redirectTo: 'not-found' } ,

];
