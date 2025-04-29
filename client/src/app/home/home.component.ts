import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { Title } from '@angular/platform-browser';
import { HeroComponent } from '../components/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ProductGridComponent,
    HeroComponent, // Lägg till din befintliga HeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor (private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Retech - Begagnad Teknik');
  }

}
