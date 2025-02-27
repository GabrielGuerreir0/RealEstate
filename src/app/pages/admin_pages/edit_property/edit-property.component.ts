import { Component } from '@angular/core';

import { NavbarAdminComponent } from '../../../components/navbar_admin/navbar-admin.component';


@Component({
  selector: 'app-edit-property',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './edit-property.component.html',
  styleUrl: './edit-property.component.scss',
})
export class EditPropertyComponent {
  constructor() {}
}
