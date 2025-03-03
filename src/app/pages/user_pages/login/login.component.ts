import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router : Router) {}

  GoToList() {
    this.router.navigate(['/list'])
  }

  GoToReset() {
    this.router.navigate(['/reset'])
  }

  GoToRegister() {
    this.router.navigate(['/register'])
  }
}
