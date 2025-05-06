import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProducts(searchTerm: string = ''): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        search: searchTerm,
      },
    });
  }

  getProductBySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${slug}`);
  }

  getSimilarProducts(slug: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/similar-products/${slug}`);
  }
}
