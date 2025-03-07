import { Component } from '@angular/core';
import { NavBarUserComponent } from '../../components/navbar-user/navbar-user.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarUserComponent, FooterComponent],
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.scss',
})
export class PropertyDetailsComponent {
  constructor() {}
}
