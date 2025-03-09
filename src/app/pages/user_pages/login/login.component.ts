import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';
import { CustomerAuthService } from '../../../services/customer/customer.auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router : Router, private customerAuthService : CustomerAuthService) {}

  email: string = '';
  password: string = '';
  message: string = '';

  login() {
    if (this.customerAuthService.login(this.email, this.password)) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/list'])
      console.log('Usuário autenticado');
    } else {
       alert('Email ou senha incorretos!');
    }
  
  }

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
