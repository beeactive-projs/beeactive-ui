import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: 'server-error',
    loadComponent: () =>
      import('./server-error/server-error.component').then((m) => m.ServerErrorComponent),
    title: 'Server Error - BeeActive',
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found - BeeActive',
  },
  {
    path: '',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];
