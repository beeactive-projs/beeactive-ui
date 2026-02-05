import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
    title: 'Sign In - BeeActive',
  },
  {
    path: 'signup',
    loadComponent: () => import('./sign-up/sign-up.component').then((m) => m.SignUpComponent),
    title: 'Create Account - BeeActive',
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
    title: 'Reset Password - BeeActive',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
