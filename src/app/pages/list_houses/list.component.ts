import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarUserComponent } from '../../components/navbar-user/navbar-user.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarUserComponent, FooterComponent, PropertyCardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  constructor(private router : Router) {}

  navigateToDetails(propertyCode: number) {
    this.router.navigate(['/property-details', propertyCode]); 
  }
}
