import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import type { MenuItem } from 'primeng/api';
import { SidenavLayoutComponent } from '../../layouts/sidenav-layout/sidenav-layout.component';

@Component({
  selector: 'bee-client',
  imports: [RouterOutlet, SidenavLayoutComponent],
  template: `
    <bee-sidenav-layout [menuItems]="menuItems">
      <router-outlet />
    </bee-sidenav-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Client {
  readonly menuItems: ReadonlyArray<MenuItem> = [
    { label: 'Dashboard', icon: 'pi pi-objects-column', routerLink: '/app/client/dashboard' },
    { label: 'My Sessions', icon: 'pi pi-calendar', routerLink: '/app/client/sessions' },
    { label: 'Programs', icon: 'pi pi-file', routerLink: '/app/client/programs' },
    { label: 'Messages', icon: 'pi pi-comments', routerLink: '/app/client/messages' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/app/client/settings' },
  ];
}
