import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';
import { CustomerAuthService } from '../../../services/customer/customer.auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router : Router, private customerAuthService : CustomerAuthService) {}

  name : string = ''
  telephone : string = ''
  email : string = ''
  password : string = ''
  passwordConfirm : string = ''

  Register() {
    if (!this.name.trim() || !this.telephone.trim() || !this.email.trim() || !this.password.trim()) {
      alert('Todos os campos são obrigatórios.');
      return;
    }
  
    if (this.password !== this.passwordConfirm) {
      alert('Senhas não conferem.');
      return;
    }
  
    const result = this.customerAuthService.register(this.name, this.telephone, this.email, this.password);
  
    if (!result.success) {
      alert(result.message);
      return;
    }
  
    alert('Cliente ' + this.name + ' cadastrado com sucesso!');
    this.router.navigate(['/login']);
    console.log('Usuário cadastrado');
  }
  

  GoToLogin() {
    this.router.navigate(['/login'])
  }
}
