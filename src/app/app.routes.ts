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
  },
  {
    path : 'list',
    loadComponent: () => 
      import('./pages/list_houses/list.component').then((m) => m.ListComponent)
  },
  {
    path : 'register-property',
    loadComponent: () => 
      import('./pages/admin_pages/register_property/register-property.component').then((m) => m.RegistePropertyComponent)
  },
  {
    path : 'edit-property',
    loadComponent: () => 
      import('./pages/admin_pages/edit_property/edit-property.component').then((m) => m.EditPropertyComponent)
  },
  {
    path : 'remove-property',
    loadComponent: () => 
      import('./pages/admin_pages/remove_property/remove-property.component').then((m) => m.RemovePropertyComponent)
  }
];

  
