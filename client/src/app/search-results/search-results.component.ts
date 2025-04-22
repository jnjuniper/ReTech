import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  products: Product[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('q') || '';
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.http.get<Product[]>(`http://localhost:8000/api/products?search=${this.searchTerm}`)
      .subscribe(res => {
        this.products = res;
      });
  }
}