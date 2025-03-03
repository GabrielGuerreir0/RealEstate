import { Component } from '@angular/core';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-reset-admin',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './reset-admin.component.html',
  styleUrl: './reset-admin.component.scss',
})

export class ResetAdminComponent {
  constructor() {}
}
