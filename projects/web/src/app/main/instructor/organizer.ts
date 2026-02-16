import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { MenuItem } from 'primeng/api';
import { SidenavLayoutComponent } from '../../layouts/sidenav-layout/sidenav-layout.component';

@Component({
  selector: 'bee-organizer',
  imports: [RouterOutlet, SidenavLayoutComponent],
  templateUrl: './organizer.html',
  styleUrl: './organizer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Organizer {
  readonly menuItems: ReadonlyArray<MenuItem> = [
    { label: 'Dashboard', icon: 'pi pi-objects-column', routerLink: '/app/dashboard' },
    { label: 'Clients', icon: 'pi pi-users', routerLink: '/app/clients' },
    { label: 'Schedule', icon: 'pi pi-calendar', routerLink: '/app/schedule' },
    { label: 'Programs', icon: 'pi pi-file', routerLink: '/app/programs' },
    { label: 'Analytics', icon: 'pi pi-chart-bar', routerLink: '/app/analytics' },
    { label: 'Messages', icon: 'pi pi-comments', routerLink: '/app/messages' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/app/settings' },
  ];
}
