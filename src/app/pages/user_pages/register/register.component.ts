import { Component } from '@angular/core';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor() {}
}
