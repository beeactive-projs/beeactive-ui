import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import type { MenuItem } from 'primeng/api';

@Component({
  selector: 'bee-organizer',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    BadgeModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './organizer.html',
  styleUrl: './organizer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Organizer {
  private readonly router = inject(Router);

  sidebarOpen = signal(false);

  readonly mainNav: ReadonlyArray<MenuItem> = [
    { label: 'Dashboard', icon: 'pi pi-objects-column', routerLink: '/app/dashboard' },
    { label: 'Clients', icon: 'pi pi-users', routerLink: '/app/clients' },
    { label: 'Schedule', icon: 'pi pi-calendar', routerLink: '/app/schedule' },
    { label: 'Programs', icon: 'pi pi-file', routerLink: '/app/programs' },
  ];

  readonly toolsNav: ReadonlyArray<MenuItem> = [
    { label: 'Analytics', icon: 'pi pi-chart-bar', routerLink: '/app/analytics' },
    { label: 'Messages', icon: 'pi pi-comments', routerLink: '/app/messages' },
    { label: 'Settings', icon: 'pi pi-cog', routerLink: '/app/settings' },
  ];

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly pageTitle = computed(() => {
    const url = this.url();
    const all = [...this.mainNav, ...this.toolsNav];
    const match = all.find((item) => url.startsWith(item.routerLink as string));
    return match?.label ?? 'Dashboard';
  });

  toggleSidebar(): void {
    this.sidebarOpen.update((open) => !open);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
