import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideIconsModule } from '../lucide-icons/lucide-icons.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideIconsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  query: string = '';

  constructor(private router: Router) {}

  onSearch(event: Event) {
    event.preventDefault();
    this.router.navigate(['/search'], {
      queryParams: { q: this.query }
    });
  }
}
