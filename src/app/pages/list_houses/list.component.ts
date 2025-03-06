import { Component } from '@angular/core';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, PropertyCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor() {}
}
