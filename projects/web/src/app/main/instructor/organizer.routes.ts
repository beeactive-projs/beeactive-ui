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
        path: 'groups',
        loadComponent: () => import('./groups/groups').then((m) => m.Groups),
        title: 'Groups - BeeActive',
      },
      {
        path: 'groups/:id',
        loadComponent: () => import('./groups/group-detail/group-detail').then((m) => m.GroupDetail),
        title: 'Group Details - BeeActive',
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile').then((m) => m.Profile),
        title: 'My Profile - BeeActive',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
