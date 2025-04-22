import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotService, Spot } from '../../services/spots.service';

@Component({
  selector: 'app-spots',
  standalone: true,
  imports: [CommonModule],
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
