import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-not-found',
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  private readonly router = inject(Router);
  private readonly location = inject(Location);

  goHome(): void {
    this.router.navigate(['/']);
  }

  goBack(): void {
    this.location.back();
  }

  searchHelp(): void {
    // Navigate to help/FAQ page when implemented
    console.log('Navigate to help page');
  }
}
