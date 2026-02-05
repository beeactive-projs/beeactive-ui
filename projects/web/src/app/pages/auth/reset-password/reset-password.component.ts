import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'bee-reset-password',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    MessageModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent {
  private readonly fb = inject(FormBuilder);

  // Signals for component state
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

  // Reactive form
  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  // Host bindings
  host = {
    class: 'block w-full h-full',
  };

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    const email = this.forgotPasswordForm.value.email;

    // Simulate API call (replace with actual API call when backend is ready)
    setTimeout(() => {
      this.isLoading.set(false);
      this.successMessage.set(
        'If an account exists with this email, you will receive password reset instructions shortly.',
      );
      this.forgotPasswordForm.reset();
    }, 1500);

    // TODO: Replace with actual API call when backend is ready
    // this.authService.forgotPassword(email).subscribe({
    //   next: () => {
    //     this.isLoading.set(false);
    //     this.successMessage.set(
    //       'If an account exists with this email, you will receive password reset instructions shortly.'
    //     );
    //     this.forgotPasswordForm.reset();
    //   },
    //   error: (error) => {
    //     this.isLoading.set(false);
    //     this.errorMessage.set(
    //       error.error?.message || 'Failed to send reset instructions. Please try again.'
    //     );
    //   },
    // });
  }

  // Helper methods for validation
  isFieldInvalid(fieldName: string): boolean {
    const field = this.forgotPasswordForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.forgotPasswordForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return 'Email is required';
    if (field.errors['email']) return 'Please enter a valid email address';

    return '';
  }
}
