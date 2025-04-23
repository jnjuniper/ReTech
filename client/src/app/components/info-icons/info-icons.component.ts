import { Component } from '@angular/core';
import { LucideIconsModule } from '../../lucide-icons/lucide-icons.module';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info-icons',
  standalone: true,
  imports: [CommonModule, LucideIconsModule],
  templateUrl: './info-icons.component.html',
  styleUrl: './info-icons.component.css'
})
export class InfoIconsComponent {

}
