import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductGridComponent },
  { path: 'product/:slug', component: ProductDetailComponent },
  {
    path: 'search',
    loadComponent: () =>
      import('./search-results/search-results.component').then(
        (m) => m.SearchResultsComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
