import { Component } from '@angular/core';

import { NavbarAdminComponent } from '../../../components/navbar_admin/navbar-admin.component';

@Component({
  selector: 'app-register-property',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './register-property.component.html',
  styleUrl: './register-property.component.scss',
})
export class RegistePropertyComponent {
  constructor() {}
}
