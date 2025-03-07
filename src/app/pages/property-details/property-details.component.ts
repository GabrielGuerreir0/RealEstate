import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarUserComponent } from '../../components/navbar-user/navbar-user.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PropertyService } from './../../services/property/property.service'; 

@Component({
  selector: 'app-property-details',
  imports: [NavBarUserComponent, FooterComponent, CommonModule],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
  standalone: true,
})

export class PropertyDetailsComponent implements OnInit {
  property: any;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService) {}

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');

    if (propertyId) {
      this.property = this.propertyService.getPropertyById(+propertyId); 
    }
  }

  email: string = 'exemplo@email.com'; 
  whatsappNumber: string = '5585999999999'
}
