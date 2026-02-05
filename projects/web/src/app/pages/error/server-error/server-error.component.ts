import { Component, signal, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-server-error',
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './server-error.component.html',
  styleUrl: './server-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerErrorComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // Signals for error details
  errorCode = signal<number>(500);
  errorTitle = signal<string>('Server Error');
  errorMessage = signal<string>('Something went wrong on our end. Please try again later.');

  ngOnInit(): void {
    // Get error details from route params or query params
    this.route.queryParams.subscribe((params) => {
      const code = parseInt(params['code']) || 500;
      this.errorCode.set(code);
      this.updateErrorDetails(code);
    });
  }

  private updateErrorDetails(code: number): void {
    switch (code) {
      case 500:
        this.errorTitle.set('Internal Server Error');
        this.errorMessage.set(
          'Oops! Something went wrong on our end. Our team has been notified and is working on it.'
        );
        break;
      case 502:
        this.errorTitle.set('Bad Gateway');
        this.errorMessage.set(
          'We are experiencing connectivity issues with our servers. Please try again in a moment.'
        );
        break;
      case 503:
        this.errorTitle.set('Service Unavailable');
        this.errorMessage.set(
          'Our service is temporarily unavailable. We are working to restore it as soon as possible.'
        );
        break;
      case 504:
        this.errorTitle.set('Gateway Timeout');
        this.errorMessage.set(
          'The request took too long to complete. Please check your connection and try again.'
        );
        break;
      default:
        this.errorTitle.set('Server Error');
        this.errorMessage.set(
          'Something went wrong on our end. Please try again later.'
        );
    }
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  retry(): void {
    window.location.reload();
  }

  goBack(): void {
    window.history.back();
  }
}
