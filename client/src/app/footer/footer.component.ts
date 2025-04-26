import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  // Objekt för att hålla koll på accordion-sektionernas tillstånd
  isOpen = {
    shopping: false,
    minaSidor: false,
    kundtjanst: false,
  };

  constructor() {}

  // Funktion för att öppna/stänga accordion-sektioner
  toggleSection(section: string): void {
    if (section in this.isOpen) {
      this.isOpen[section as keyof typeof this.isOpen] =
        !this.isOpen[section as keyof typeof this.isOpen];
    }
  }
}
