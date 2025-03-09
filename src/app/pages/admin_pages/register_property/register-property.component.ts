import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarAdminComponent } from '../../../components/navbar_admin/navbar-admin.component';
import { PropertyService } from '../../../services/property/property.service';

@Component({
  selector: 'app-register-property',
  standalone: true,
  imports: [NavbarAdminComponent, FormsModule],
  templateUrl: './register-property.component.html',
  styleUrl: './register-property.component.scss',
})
export class RegistePropertyComponent {
  constructor(private propertyService : PropertyService) {}

  property = {
    code: 0,
    type: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    area: 0.0,
    dormitories: 0,
    suites: 0,
    garage: 0,
    bathrooms: 0,
    kitchens: 0,
    leisureAreas: 0,
    capacity: 0,
    transactionType: '',
    iptu: 0,
    rentPrice: 0,
    salePrice: 0,
    description: '',
    image: ''
  };

  registerProperty() {
    this.propertyService.saveProperty(this.property);
    alert('Cadastro de imóvel feito com sucesso.')
  }
}
