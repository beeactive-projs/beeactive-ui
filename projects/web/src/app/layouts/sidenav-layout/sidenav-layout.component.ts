import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  input,
  inject,
  DestroyRef,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import type { MenuItem } from 'primeng/api';
import { AuthService } from 'core';
import { ThemeToggleComponent } from '../../_shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'bee-sidenav-layout',
  imports: [RouterLink, RouterLinkActive, ButtonModule, ToolbarModule, ThemeToggleComponent],
  templateUrl: './sidenav-layout.component.html',
  styleUrl: './sidenav-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavLayoutComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly authService = inject(AuthService);
  private readonly lgQuery = window.matchMedia('(min-width: 1024px)');

  readonly menuItems = input.required<ReadonlyArray<MenuItem>>();
  readonly brandName = input('Bee Active');

  private readonly isDesktop = signal(this.lgQuery.matches);

  sidebarOpen = signal(this.lgQuery.matches);
  sidebarAnimating = signal(false);
  readonly showBackdrop = computed(() => this.sidebarOpen() && !this.isDesktop());

  /** Close sidebar on navigation when in over mode (< lg). */
  private readonly autoCloseOnNav = this.router.events
    .pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      filter(() => !this.lgQuery.matches),
      takeUntilDestroyed(),
    )
    .subscribe(() => this.closeSidebar());

  constructor() {
    const onResize = (e: MediaQueryListEvent) => {
      this.isDesktop.set(e.matches);
      if (e.matches) {
        this.sidebarAnimating.set(true);
        this.sidebarOpen.set(true);
      } else {
        this.closeSidebar();
      }
    };

    this.lgQuery.addEventListener('change', onResize);
    this.destroyRef.onDestroy(() => this.lgQuery.removeEventListener('change', onResize));
  }

  toggleSidebar(): void {
    this.sidebarAnimating.set(true);
    this.sidebarOpen.update((open) => !open);
  }

  closeSidebar(): void {
    if (!this.sidebarOpen()) return;
    this.sidebarAnimating.set(true);
    this.sidebarOpen.set(false);
  }

  onSidebarTransitionEnd(event: TransitionEvent): void {
    if (event.propertyName === 'transform') {
      this.sidebarAnimating.set(false);
    }
  }

  signOut(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/auth/login']);
    });
    this.router.navigate(['/auth/login']);
  }
}
