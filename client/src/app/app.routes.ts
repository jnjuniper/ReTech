import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminProductListComponent } from './admin/admin.product-list/admin.product-list.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductGridComponent },
      { path: 'product/:slug', component: ProductDetailComponent },
       {
         path: 'search',
         loadComponent: () =>
           import('./search-results/search-results.component').then(
             (m) => m.SearchResultsComponent
           )
       },
    ]
  },

{
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'products', component: AdminProductListComponent },
      { path: 'products/new', component: AdminComponent },
    ]
}]
