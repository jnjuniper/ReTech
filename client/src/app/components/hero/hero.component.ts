import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotsComponent } from '../spots/spots.component';
import { HeroImageService, HeroImage } from '../../services/hero-image.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SpotsComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit, OnDestroy {
  heroImages: HeroImage[] = [];
  currentIndex = 0;
  isTransitioning = false;
  error: string | null = null;
  private timer: any;

  constructor(
    private heroImageService: HeroImageService,
  ) {}

  ngOnInit() {
    this.heroImageService.getHeroImages().subscribe({
      next: (data) => (this.heroImages = data),
      error: () => (this.error = 'Det gick inte att ladda bilderna. Försök igen senare.'),
    });

    this.setupInterval();
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  setupInterval() {
    this.timer = setInterval(() => {
      if (this.heroImages.length > 1) {
        this.isTransitioning = true;
        setTimeout(() => {
          this.currentIndex =
            this.currentIndex === this.heroImages.length - 1
              ? 0
              : this.currentIndex + 1;
          setTimeout(() => (this.isTransitioning = false), 50);
        }, 500);
      }
    }, 5000);
  }

  get currentImage(): HeroImage | null {
    return this.heroImages[this.currentIndex] || null;
  }

  get transitionClass(): string {
    return this.isTransitioning ? 'opacity-0' : 'opacity-100';
  }
}
