import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';
import { CustomerAuthService } from '../../../services/customer/customer.auth.service';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss',
})
export class ResetComponent {
  constructor(private router : Router, private customerAuthService : CustomerAuthService) {}

  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';


  resetPassword() {
    const result = this.customerAuthService.resetPassword(this.email, this.newPassword, this.confirmPassword);
    
    this.message = result.message;
    
    if (result.success) {
      alert('Senha redefinida com sucesso.');
      this.router.navigate(['/login']); 
    }
    else {
      alert(result.message)
    }
  }
}