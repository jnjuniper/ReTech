import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Spot } from '../../../../services/spots.service';
@Component({
  selector: 'app-spot1',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './spot1.component.html',
  styleUrl: './spot1.component.css'
})
export class Spot1Component {
 @Input() spotData!: Spot;
}
