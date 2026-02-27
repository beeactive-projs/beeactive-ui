import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { ThemeService } from '../../../_core/services/theme.service';

@Component({
  selector: 'bee-public-header',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class PublicHeaderComponent {
  private readonly themeService = inject(ThemeService);

  readonly mobileMenuOpen = signal(false);
  readonly isDark = this.themeService.isDark;
  readonly scrolled = signal(false);

  onScroll(): void {
    this.scrolled.set(window.scrollY > 5);
  }

  readonly navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'About', path: '/about', exact: false },
    { label: 'Blog', path: '/blog', exact: false },
  ];

  toggleTheme(): void {
    this.themeService.toggle();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
