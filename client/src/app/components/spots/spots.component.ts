import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotService, Spot } from '../../services/spots.service';
import { Spot1Component } from './spots/spot1/spot1.component';
import { Spot2Component } from './spots/spot2/spot2.component';
import { Spot3Component } from './spots/spot3/spot3.component';


@Component({
  selector: 'app-spots',
  standalone: true,
  imports: [CommonModule,Spot1Component, Spot2Component, Spot3Component],
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  spots: Spot[] = [];
  error: string | null = null;

  constructor(private spotService: SpotService) {}

  ngOnInit(): void {
    this.spotService.getSpots().subscribe({
      next: (data: Spot[]) => this.spots = data,
      error: () => this.error = 'Failed to load spot images.'
    });
  }
}
