import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
    title: 'Sign In - BeeActive',
  },
];
