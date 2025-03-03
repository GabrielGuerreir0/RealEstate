import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router : Router) {}

  GoToLogin() {
    this.router.navigate(['/login'])
  }
}
