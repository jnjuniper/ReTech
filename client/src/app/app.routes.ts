import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductGridComponent },
      { path: 'product/:slug', component: ProductDetailComponent },
      // {
      //   path: 'search',
      //   loadComponent: () =>
      //     import('./search-results/search-results.component').then(
      //       (m) => m.SearchResultsComponent
      //     )
      // }, Bortkommenterat nu, aktiverar detta när search-results.component är mergad. /AL
    ]
  },

  
  {
    path: 'admin/products/new',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.AdminComponent)
  },

  { path: '**', redirectTo: '' }
];