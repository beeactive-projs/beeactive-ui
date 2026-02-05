import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    title: 'BeeActive - Transform Your Fitness Journey',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    title: 'About Us - BeeActive',
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then((m) => m.ServicesComponent),
    title: 'Our Services - BeeActive',
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact Us - BeeActive',
  },
];
