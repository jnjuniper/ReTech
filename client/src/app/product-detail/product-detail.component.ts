import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  providers: [ProductService],
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  similarProducts: Product[] = [];
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        this.loadProduct(slug);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  loadProduct(slug: string): void {
    this.loading = true;
    this.productService.getProductBySlug(slug).subscribe({
      next: (data) => {
        this.product = data;
        this.loading = false;
        this.titleService.setTitle(data.productName);
        this.loadSimilarProducts(data);
      },
      error: (error) => {
        this.errorMessage =
          'Det gick inte att ladda produkten. Försök igen senare.';
        this.loading = false;
        console.error('Ett fel uppstod vid hämtning av produkt', error);
        this.titleService.setTitle('Retech - Begagnad Teknik');
      },
    });
  }

  loadSimilarProducts(product: Product): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        const otherProducts = data.filter((p) => p.id !== product.id);

        let potentialSimilar = otherProducts;

        this.similarProducts = this.shuffleArray(potentialSimilar).slice(0, 3);
      },
      error: (error) => {
        console.error(
          'Ett fel uppstod vid hämtning av liknande produkter',
          error
        );
      },
    });
  }

  private shuffleArray(array: any[]): any[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  addToCart(): void {
    alert('Produkt tillagd i varukorgen!');
  }

  toggleFavorite(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const button = target.closest('.heart-icon-mobile') as HTMLElement;

    if (button) {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.querySelector('i')?.classList.replace('fas', 'far');
      } else {
        button.classList.add('active');
        button.querySelector('i')?.classList.replace('far', 'fas');
      }
    }
  }
}
