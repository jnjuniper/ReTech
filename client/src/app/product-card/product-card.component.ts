import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  isFavorite = false;

  // Metod för att växla favoritstatus
  toggleFavorite(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;

    // Visuell bekräftelse med klassändring - inte aktuell för tillfället
    const target = event.target as HTMLElement;
    const button = target.closest('.heart-icon') as HTMLElement;

    if (this.isFavorite) {
      button.classList.add('active');
      button.querySelector('i')?.classList.replace('far', 'fas');
    } else {
      button.classList.remove('active');
      button.querySelector('i')?.classList.replace('fas', 'far');
    }
  }
}
