import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
interface HeroImage {
  image: string;
  altText: string;
  imageDescription: string;
}

interface Spot {
  id: number;
  image: string;
  altText?: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  heroImages: HeroImage[] = [
    {
      image: 'assets/hero1.jpg',
      altText: 'A beautiful sunrise over the mountains',
      imageDescription: 'Sunrise in the Alps'
    },
    {
      image: 'assets/hero2.jpg',
      altText: 'A calm lake with a reflection of trees',
      imageDescription: 'Peaceful Lake'
    },
    {
      image: 'assets/hero3.jpg',
      altText: 'City skyline at night',
      imageDescription: 'City Lights'
    }
  ];

  spots: Spot[] = [
    {
      id: 1,
      image: 'assets/spot1.jpg',
      altText: 'Spot 1'
    },
    {
      id: 2,
      image: 'assets/spot2.jpg',
      altText: 'Spot 2'
    },
    {
      id: 3,
      image: 'assets/spot3.jpg',
      altText: 'Spot 3'
    }
  ];

  currentIndex = 0;
  isTransitioning = false;
  error: string | null = null;
  private timer: any;

  ngOnInit() {
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
          this.currentIndex = this.currentIndex === this.heroImages.length - 1 ? 0 : this.currentIndex + 1;
          setTimeout(() => this.isTransitioning = false, 50);
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
