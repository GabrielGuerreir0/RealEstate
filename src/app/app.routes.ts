import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Rota inicial
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login', 
    loadComponent: () =>
      import('./pages/user_pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => 
      import('./pages/user_pages/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path : 'reset',
    loadComponent: () => 
      import('./pages/user_pages/reset/reset.component').then((m) => m.ResetComponent),
  }
];

  
