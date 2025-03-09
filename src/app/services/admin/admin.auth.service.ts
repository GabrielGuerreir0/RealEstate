import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthService {
  private admins: {name : string, telephone : string, email: string, password: string }[] = [
    { name: 'Douglas', telephone: '(85) 993939939', email: 'admin@email.com', password: 'senhaForte123' }
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    return this.admins.some(admin => admin.email === email && admin.password === password);
  }

  register(name : string, telephone : string, email: string, password: string): boolean {
    const adminExists = this.admins.some(admin => admin.email === email);
    
    if (adminExists) {
      return false; 
    }
    
    this.admins.push({ name, telephone, email, password });
    return true; 
  }

  resetPassword(email: string, newPassword: string, confirmPassword: string): boolean {

    const adminExists = this.admins.some(admin => admin.email === email);

    if (adminExists) {
        return false;
    }

    if (newPassword !== confirmPassword) {
      return false; 
    }
    
    console.log(`Resetando senha para: ${email}`);
    
    return true;
  }
}
