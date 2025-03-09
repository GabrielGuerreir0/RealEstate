import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './../../../components/nav-bar/nav-bar.component';
import { AdminAuthService } from '../../../services/admin/admin.auth.service';


@Component({
  selector: 'app-reset-admin',
  standalone: true,
  imports: [NavBarComponent, FormsModule],
  templateUrl: './reset-admin.component.html',
  styleUrl: './reset-admin.component.scss',
})

export class ResetAdminComponent {
  constructor(private adminAuthService : AdminAuthService) {}

  email: string = '';
  newPassword: string = '';
  passwordConfirm: string = '';


  resetPassword() {
    this.adminAuthService.resetPassword(this.email, this.newPassword, this.passwordConfirm)
      alert('Senha redefinida com sucesso!');
  }
}
