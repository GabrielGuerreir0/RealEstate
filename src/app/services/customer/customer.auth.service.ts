import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerAuthService {
  private readonly CUSTOMERS_KEY = 'customers';

  constructor() {
    if (!localStorage.getItem(this.CUSTOMERS_KEY)) {
      localStorage.setItem(this.CUSTOMERS_KEY, JSON.stringify([]));
    }
  }

  private getCustomers(): { name: string; telephone: string; email: string; password: string }[] {
    const customers = localStorage.getItem(this.CUSTOMERS_KEY);
    return customers ? JSON.parse(customers) : [];
  }

  private saveCustomers(customers: { name: string; telephone: string; email: string; password: string }[]): void {
    localStorage.setItem(this.CUSTOMERS_KEY, JSON.stringify(customers));
  }

  login(email: string, password: string): boolean {
    if (!email.trim() || !password.trim()) {
      return false;
    }
  
    const customers = this.getCustomers();
    return customers.some((customer) => customer.email === email && customer.password === password);
  }

  register(name: string, telephone: string, email: string, password: string): { success: boolean; message: string } {
    const customers = this.getCustomers();
    const customerExists = customers.some((customer) => customer.email === email);

    if (customerExists) {
      return { success: false, message: 'Email já cadastrado.' };
    }

    customers.push({ name, telephone, email, password });
    this.saveCustomers(customers);
    return { success: true, message: 'Cliente cadastrado com sucesso!' };
  }

  resetPassword(email: string, newPassword: string, confirmPassword: string): { success: boolean; message: string } {
    if (!email.trim() || !newPassword.trim() || !confirmPassword.trim()) {
      return { success: false, message: 'Todos os campos são obrigatórios.' };
    }
    
    let customers = this.getCustomers();
    let customerIndex = customers.findIndex((customer) => customer.email === email);

    if (customerIndex === -1) {
      return { success: false, message: 'Email não encontrado.' };
    }

    if (newPassword !== confirmPassword) {
      return { success: false, message: 'As senhas não coincidem.' };
    }

    customers[customerIndex].password = newPassword;
    this.saveCustomers(customers);

    return { success: true, message: 'Senha redefinida com sucesso!' };
  }
}


/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomerAuthService {
  private customers: {name : string, telephone : string, email: string, password: string }[] = [
    { name: 'Douglas', telephone: '(85) 993939939', email: 'customer@email.com', password: 'senhaForte123' }
  ];

  constructor() {}

  login(email: string, password: string): boolean {
    return this.customers.some(customer => customer.email === email && customer.password === password);
  }

  register(name : string, telephone : string, email: string, password: string): boolean {
    const customerExists = this.customers.some(customer => customer.email === email);
    
    if (customerExists) {
      return false; 
    }
    
    this.customers.push({ name, telephone, email, password });
    return true; 
  }

  resetPassword(email: string, newPassword: string, confirmPassword: string): boolean {

    const customerExists = this.customers.some(customer => customer.email === email);

    if (customerExists) {
        return false;
    }
    
    if (newPassword !== confirmPassword) {
      return false; 
    }
    
    console.log(`Resetando senha para: ${email}`);
    
    return true;
  }
} */
