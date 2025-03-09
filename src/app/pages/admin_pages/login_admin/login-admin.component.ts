import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';
import { AdminAuthService } from './../../../services/admin/admin.auth.service';


@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.scss'
})
export class LoginAdminComponent {
  constructor(private router : Router, private adminAuthService : AdminAuthService) {}

  email: string = '';
  password: string = '';
  message: string = '';

  login() {
    if (this.adminAuthService.login(this.email, this.password)) {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/register-property'])
      console.log('Usuário autenticado');
    } else {
       alert('Email ou senha incorretos!');
    }
  }

  GoToRegister() {
    this.router.navigate(['/register-property']);
  }

  GoToReset() {
    this.router.navigate(['/reset-admin'])
  }

}
