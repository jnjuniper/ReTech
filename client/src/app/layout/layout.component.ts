import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { InfoIconsComponent } from '../components/info-icons/info-icons.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InfoIconsComponent, FooterComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
