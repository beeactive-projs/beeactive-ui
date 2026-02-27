import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

import { AuthStore } from 'core';

@Component({
  selector: 'bee-dashboard',
  imports: [
    RouterLink,
    AvatarModule,
    ButtonModule,
    CardModule,
    DividerModule,
    TagModule,
  ],
  template: `
    <!-- Welcome Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-surface-900">
        Welcome back, {{ authStore.userName() }}
      </h1>
      <p class="text-surface-500 mt-1">Here's your instructor hub. What would you like to do?</p>
    </div>

    <!-- Quick Action Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <a routerLink="/app/clients" class="no-underline">
        <p-card styleClass="hover:shadow-md transition-shadow cursor-pointer h-full">
          <div class="flex flex-col items-center text-center gap-3 py-4">
            <p-avatar icon="pi pi-users" size="large" shape="circle"
              [style]="{ 'background-color': 'var(--p-primary-100)', 'color': 'var(--p-primary-600)' }" />
            <div>
              <h3 class="text-lg font-semibold text-surface-900 m-0">Manage Clients</h3>
              <p class="text-surface-500 text-sm mt-1 mb-0">View and manage your client relationships</p>
            </div>
            <p-tag value="Clients" severity="info" />
          </div>
        </p-card>
      </a>

      <a routerLink="/app/groups" class="no-underline">
        <p-card styleClass="hover:shadow-md transition-shadow cursor-pointer h-full">
          <div class="flex flex-col items-center text-center gap-3 py-4">
            <p-avatar icon="pi pi-sitemap" size="large" shape="circle"
              [style]="{ 'background-color': 'var(--p-green-100)', 'color': 'var(--p-green-600)' }" />
            <div>
              <h3 class="text-lg font-semibold text-surface-900 m-0">Manage Groups</h3>
              <p class="text-surface-500 text-sm mt-1 mb-0">Create and organize your training groups</p>
            </div>
            <p-tag value="Groups" severity="success" />
          </div>
        </p-card>
      </a>

      <a routerLink="/app/profile" class="no-underline">
        <p-card styleClass="hover:shadow-md transition-shadow cursor-pointer h-full">
          <div class="flex flex-col items-center text-center gap-3 py-4">
            <p-avatar icon="pi pi-user" size="large" shape="circle"
              [style]="{ 'background-color': 'var(--p-orange-100)', 'color': 'var(--p-orange-600)' }" />
            <div>
              <h3 class="text-lg font-semibold text-surface-900 m-0">My Profile</h3>
              <p class="text-surface-500 text-sm mt-1 mb-0">Update your instructor profile and settings</p>
            </div>
            <p-tag value="Profile" severity="warn" />
          </div>
        </p-card>
      </a>
    </div>

    <!-- Recent Activity Placeholder -->
    <p-card>
      <ng-template #header>
        <div class="flex items-center gap-2 px-4 pt-4">
          <i class="pi pi-clock text-surface-500"></i>
          <h2 class="text-lg font-semibold text-surface-900 m-0">Recent Activity</h2>
        </div>
      </ng-template>
      <p-divider />
      <div class="flex flex-col items-center justify-center py-8 text-center">
        <i class="pi pi-inbox text-4xl text-surface-300 mb-3"></i>
        <p class="text-surface-500 m-0">Activity feed coming soon.</p>
        <p class="text-surface-400 text-sm mt-1 mb-0">
          Your recent sessions, client updates, and group activity will appear here.
        </p>
      </div>
    </p-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  readonly authStore = inject(AuthStore);
}
