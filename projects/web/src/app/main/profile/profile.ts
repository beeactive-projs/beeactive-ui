import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { AuthStore, User, UserService } from 'core';
import { take } from 'rxjs';

@Component({
  selector: 'bee-profile',
  imports: [DatePipe, RouterLink, CardModule, AvatarModule, TagModule, DividerModule, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="min-h-screen bg-secondary-50 text-secondary-900">
      <div class="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-6 md:px-10 md:py-8">
        <header class="flex items-center gap-2">
          <a routerLink=".." class="flex items-center text-secondary-500 hover:text-secondary-700">
            <i class="pi pi-arrow-left text-sm"></i>
          </a>
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-[0.2em] text-secondary-500">Account</p>
            <h1 class="font-heading text-2xl font-semibold text-secondary-900 md:text-3xl">
              My Profile
            </h1>
          </div>
        </header>

        @if (user(); as user) {
          <p-card styleClass="shadow-sm">
            <div class="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              @if (user.avatarUrl) {
                <img
                  [src]="user.avatarUrl"
                  [alt]="fullName()"
                  class="h-20 w-20 rounded-full object-cover"
                />
              } @else {
                <p-avatar [label]="initials()" shape="circle" size="xlarge" styleClass="text-2xl" />
              }
              <div class="flex flex-1 flex-col gap-1 text-center sm:text-left">
                <h2 class="text-xl font-semibold text-secondary-900">{{ fullName() }}</h2>
                <p class="text-sm text-secondary-500">{{ user.email }}</p>
                <div class="mt-1 flex flex-wrap justify-center gap-2 sm:justify-start">
                  @for (role of user.roles; track role) {
                    <p-tag [value]="role" severity="info" styleClass="!text-xs" />
                  }
                  @if (user.isEmailVerified) {
                    <p-tag
                      value="Verified"
                      severity="success"
                      icon="pi pi-check"
                      styleClass="!text-xs"
                    />
                  } @else {
                    <p-tag
                      value="Unverified"
                      severity="warn"
                      icon="pi pi-exclamation-triangle"
                      styleClass="!text-xs"
                    />
                  }
                </div>
              </div>
            </div>
          </p-card>

          <p-card styleClass="shadow-sm">
            <h3 class="text-lg font-semibold text-secondary-900">Details</h3>
            <p-divider />
            <dl class="grid gap-4 sm:grid-cols-2">
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">First Name</dt>
                <dd class="mt-1 text-sm font-medium text-secondary-900">{{ user.firstName }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">Last Name</dt>
                <dd class="mt-1 text-sm font-medium text-secondary-900">{{ user.lastName }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">Email</dt>
                <dd class="mt-1 text-sm font-medium text-secondary-900">{{ user.email }}</dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">Phone</dt>
                <dd class="mt-1 text-sm font-medium text-secondary-900">
                  {{ user.phone || 'Not provided' }}
                </dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">Account Status</dt>
                <dd class="mt-1">
                  <p-tag
                    [value]="user.isActive ? 'Active' : 'Inactive'"
                    [severity]="user.isActive ? 'success' : 'danger'"
                    styleClass="!text-xs"
                  />
                </dd>
              </div>
              <div>
                <dt class="text-xs uppercase tracking-wide text-secondary-500">Member Since</dt>
                <dd class="mt-1 text-sm font-medium text-secondary-900">
                  {{ user.createdAt | date: 'mediumDate' }}
                </dd>
              </div>
            </dl>
          </p-card>
        } @else {
          <p-card styleClass="shadow-sm">
            <div class="flex flex-col items-center gap-3 py-8 text-center">
              <i class="pi pi-user text-4xl text-secondary-300"></i>
              <p class="text-sm text-secondary-500">No profile data available.</p>
            </div>
          </p-card>
        }
      </div>
    </section>
  `,
})
export class Profile implements OnInit {
  ngOnInit(): void {
    this.userService
      .getMe()
      .pipe(take(1))
      .subscribe((user) => this.user.set(user));
  }
  private readonly userService = inject(UserService);

  user = signal<User | null>(null);

  readonly fullName = computed(() => {
    const u = this.user();
    return u ? `${u.firstName} ${u.lastName}` : '';
  });

  readonly initials = computed(() => {
    const u = this.user();
    if (!u) return '';
    return `${u.firstName.charAt(0)}${u.lastName.charAt(0)}`.toUpperCase();
  });
}
