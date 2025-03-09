import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarUserComponent } from '../../components/navbar-user/navbar-user.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';
import { PropertyService } from '../../services/property/property.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NavBarUserComponent, FooterComponent, PropertyCardComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  properties: any[] = [];

  constructor(private router : Router, private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

  navigateToDetails(propertyCode: number) {
    this.router.navigate(['/property-details', propertyCode]); 
  }
}
