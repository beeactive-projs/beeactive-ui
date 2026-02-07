import { Routes } from '@angular/router';

export const appRoutes: Routes = [
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
