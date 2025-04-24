import { Component, Input } from '@angular/core';
import { Spot } from '../../../../services/spots.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spot2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spot2.component.html',
  styleUrl: './spot2.component.css'
})
export class Spot2Component {
@Input() spotData!: Spot;
}
