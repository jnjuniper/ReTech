import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Startsidan visar HomeComponent
  { path: 'products', component: ProductGridComponent }, // Separat produktsida
  { path: 'product/:slug', component: ProductDetailComponent }, // Produktdetalj-sida
  { path: '**', redirectTo: '' },
];
