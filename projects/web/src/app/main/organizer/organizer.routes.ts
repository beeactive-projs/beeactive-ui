import { Routes } from '@angular/router';

export const organizerRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./organizer').then((m) => m.Organizer),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
        title: 'Dashboard - BeeActive',
      },
      {
        path: 'clients',
        loadComponent: () => import('./clients/clients').then((m) => m.Clients),
        title: 'Clients - BeeActive',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
