import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'


@Component({
  selector: 'app-navbar-admin',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './navbar-admin.component.html',
  styleUrl: './navbar-admin.component.scss',
})
export class NavbarAdminComponent {
  constructor() {}
}
