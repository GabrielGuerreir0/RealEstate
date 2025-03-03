import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss',
})
export class LoginAdminComponent {
  constructor(private router : Router) {}

  GoToRegister() {
    this.router.navigate(['/register-property']);
  }

  GoToReset() {
    this.router.navigate(['/reset-admin'])
  }

}
