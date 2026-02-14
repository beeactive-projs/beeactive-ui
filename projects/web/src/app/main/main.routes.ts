import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then((m) => m.Profile),
    title: 'My Profile - BeeActive',
  },
  {
    path: '',
    loadChildren: () => import('./organizer/organizer.routes').then((m) => m.organizerRoutes),
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.routes').then((m) => m.clientRoutes),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
