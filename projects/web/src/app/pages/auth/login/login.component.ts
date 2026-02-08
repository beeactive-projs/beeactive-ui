import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageModule } from 'primeng/message';

// Core imports
import { AuthService, AuthStore, FacebookAuthService, GoogleAuthService, LoginRequest } from 'core';

@Component({
  selector: 'bee-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    MessageModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly authStore = inject(AuthStore);
  private readonly googleAuthService = inject(GoogleAuthService);
  private readonly facebookAuthService = inject(FacebookAuthService);
  private readonly router = inject(Router);

  // Signals for component state
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  showPassword = signal(false);

  // Reactive form
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
  });

  // Host bindings
  host = {
    class: 'block w-full h-full',
  };

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    const credentials: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      rememberMe: this.loginForm.value.rememberMe,
    };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        // Navigate based on user role
        if (this.authStore.isTrainer()) {
          this.router.navigate(['/dashboard/trainer']);
        } else if (this.authStore.isClient()) {
          this.router.navigate(['/dashboard/client']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        this.errorMessage.set(
          error.error?.message || 'Invalid email or password. Please try again.',
        );
      },
    });
  }

  onGoogleLogin(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.googleAuthService
      .signIn()
      .then((accessToken: string) => {
        this.authService.googleLogin({ accessToken }).subscribe({
          next: () => {
            this.isLoading.set(false);
            if (this.authStore.isTrainer()) {
              this.router.navigate(['/dashboard/trainer']);
            } else if (this.authStore.isClient()) {
              this.router.navigate(['/dashboard/client']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          },
          error: (error: { error?: { message?: string } }) => {
            this.isLoading.set(false);
            this.errorMessage.set(error.error?.message || 'Google sign-in failed. Please try again.');
          },
        });
      })
      .catch(() => {
        this.isLoading.set(false);
      });
  }

  onFacebookLogin(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.facebookAuthService
      .signIn()
      .then((accessToken: string) => {
        this.authService.facebookLogin({ accessToken }).subscribe({
          next: () => {
            this.isLoading.set(false);
            if (this.authStore.isTrainer()) {
              this.router.navigate(['/dashboard/trainer']);
            } else if (this.authStore.isClient()) {
              this.router.navigate(['/dashboard/client']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          },
          error: (error: { error?: { message?: string } }) => {
            this.isLoading.set(false);
            this.errorMessage.set(error.error?.message || 'Facebook sign-in failed. Please try again.');
          },
        });
      })
      .catch(() => {
        this.isLoading.set(false);
      });
  }

  // Helper methods for validation
  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return `${this.capitalize(fieldName)} is required`;
    if (field.errors['email']) return 'Please enter a valid email address';
    if (field.errors['minlength']) {
      return `${this.capitalize(fieldName)} must be at least ${field.errors['minlength'].requiredLength} characters`;
    }

    return '';
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
