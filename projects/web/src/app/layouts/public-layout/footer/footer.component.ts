import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bee-public-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicFooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    { icon: 'pi-facebook', href: 'https://facebook.com', label: 'Facebook' },
    { icon: 'pi-twitter', href: 'https://twitter.com', label: 'X (Twitter)' },
    { icon: 'pi-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { icon: 'pi-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  readonly productLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  readonly supportLinks = [
    // { label: 'Help Center', path: '#' },
    // { label: 'FAQ', path: '#' },
    { label: 'Terms of Service', path: '/legal/terms-of-service' },
    { label: 'Privacy Policy', path: '/legal/privacy-policy' },
  ];
}
