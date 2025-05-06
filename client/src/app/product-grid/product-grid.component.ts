import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css',
  providers: [ProductService],
})
export class ProductGridComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  errorMessage = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage =
          'Det gick inte att ladda produkterna. Försök igen senare.';
        this.loading = false;
        console.error('Ett fel uppstod vid hämtning av produkter', error);
      },
    });
  }
}
