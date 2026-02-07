import { Routes } from '@angular/router';
import { authGuard } from 'core';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    loadChildren: () => import('./pages/public/public.routes').then((m) => m.publicRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.routes').then((m) => m.errorRoutes),
  },
  {
    path: 'legal',
    loadChildren: () => import('./pages/legal/legal.routes').then((m) => m.legalRoutes),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadChildren: () => import('./main/main.routes').then((m) => m.appRoutes),
  },
  {
    path: '**',
    redirectTo: 'error/not-found',
  },
];
