import { Component } from '@angular/core';

import { NavbarAdminComponent } from '../../../components/navbar_admin/navbar-admin.component';

@Component({
  selector: 'app-remove-property',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './remove-property.component.html',
  styleUrl: './remove-property.component.scss',
})
export class RemovePropertyComponent {
  constructor() {}
}
