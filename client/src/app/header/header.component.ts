import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideIconsModule } from '../lucide-icons/lucide-icons.module'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideIconsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}