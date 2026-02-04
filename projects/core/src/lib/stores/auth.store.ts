// projects/core/src/lib/stores/auth.store.ts
import { computed, Injectable, signal } from '@angular/core';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthStore {
  // Single source of truth for auth state
  private userSignal = signal<User | null>(null);
  private loadingSignal = signal(false);

  // Public readonly access
  readonly user = this.userSignal.asReadonly();
  readonly loading = this.loadingSignal.asReadonly();

  // Computed values (automatically update)
  readonly isAuthenticated = computed(() => this.user() !== null);
  readonly userRoles = computed(() => this.user()?.roles ?? []);
  readonly isTrainer = computed(() => this.userRoles().includes('TRAINER'));
  readonly isClient = computed(() => this.userRoles().includes('CLIENT'));
  readonly userName = computed(() => {
    const user = this.user();
    return user ? `${user.firstName} ${user.lastName}` : '';
  });

  // Actions to update state
  setUser(user: User) {
    this.userSignal.set(user);
  }

  clearUser() {
    this.userSignal.set(null);
  }

  setLoading(loading: boolean) {
    this.loadingSignal.set(loading);
  }

  hasRole(role: string): boolean {
    return this.userRoles().includes(role);
  }

  hasPermission(permission: PermissionName): boolean {
    return this.user()?.permissions.includes(permission) ?? false;
  }
}
