import { Component, Input } from '@angular/core';
import { Spot } from '../../../../services/spots.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spot3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spot3.component.html',
  styleUrl: './spot3.component.css'
})
export class Spot3Component {
@Input() spotData!: Spot;
}
