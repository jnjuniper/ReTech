import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private http: HttpClient) {}

  product = {
    productName: '',
    productDescription: '',
    image: '',
    brand: '',
    sku: '',
    price: 0
  };

  onSubmit() {
    this.http.post('http://localhost:8000/api/products', this.product).subscribe(() => {
      alert('Produkten har lagts till!');
    });
  }
}
