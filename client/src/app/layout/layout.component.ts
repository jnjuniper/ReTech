import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { InfoIconsComponent } from '../components/info-icons/info-icons.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    InfoIconsComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-info-icons></app-info-icons>
    <app-footer></app-footer>
  `,
})
export class LayoutComponent {}
