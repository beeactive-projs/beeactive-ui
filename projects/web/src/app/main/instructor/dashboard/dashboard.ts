import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG imports
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import type { ButtonSeverity } from 'primeng/types/button';

type TagSeverity =
  | 'success'
  | 'secondary'
  | 'info'
  | 'warn'
  | 'danger'
  | 'contrast'
  | null
  | undefined;

type QuickAction = {
  label: string;
  icon: string;
  severity: ButtonSeverity;
};

type StatCard = {
  label: string;
  value: number | string;
  helper: string;
  trendLabel: string;
  trendSeverity: TagSeverity;
  trendIcon: string;
  icon: string;
  accent: string;
};

type UpcomingSession = {
  time: string;
  title: string;
  location: string;
  coach: string;
  attendees: number;
  capacity: number;
  occupancy: number;
  status: string;
  statusSeverity: TagSeverity;
};

type TeamHighlight = {
  name: string;
  role: string;
  availability: string;
  status: string;
  statusSeverity: TagSeverity;
};

type AlertItem = {
  title: string;
  description: string;
  time: string;
  severity: TagSeverity;
  tag: string;
  icon: string;
};

type TopProgram = {
  name: string;
  occupancy: number;
  revenue: string;
};

@Component({
  selector: 'bee-dashboard',
  imports: [
    CommonModule,
    AvatarModule,
    BadgeModule,
    ButtonModule,
    CardModule,
    DividerModule,
    ProgressBarModule,
    TableModule,
    TagModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  readonly organizerName = 'BeeActive Studio';
  readonly subtitle = 'A quick snapshot of your operations and upcoming sessions.';

  readonly quickActions: ReadonlyArray<QuickAction> = [
    { label: 'Create Event', icon: 'pi pi-plus', severity: 'primary' },
    { label: 'Invite Clients', icon: 'pi pi-user-plus', severity: 'secondary' },
    { label: 'Publish Schedule', icon: 'pi pi-calendar', severity: 'success' },
    { label: 'View Reports', icon: 'pi pi-chart-line', severity: 'info' },
  ];

  readonly stats: ReadonlyArray<StatCard> = [
    {
      label: 'Active Programs',
      value: 14,
      helper: '3 new this month',
      trendLabel: '+12%',
      trendSeverity: 'success',
      trendIcon: 'pi pi-arrow-up-right',
      icon: 'pi pi-bolt',
      accent: 'text-primary-600',
    },
    {
      label: 'Sessions This Week',
      value: 48,
      helper: '6 remaining',
      trendLabel: '+8%',
      trendSeverity: 'success',
      trendIcon: 'pi pi-arrow-up-right',
      icon: 'pi pi-calendar',
      accent: 'text-info-600',
    },
    {
      label: 'Avg. Attendance',
      value: '86%',
      helper: 'Stable vs last week',
      trendLabel: '0%',
      trendSeverity: 'info',
      trendIcon: 'pi pi-minus',
      icon: 'pi pi-users',
      accent: 'text-success-600',
    },
    {
      label: 'Monthly Revenue',
      value: '$24.6k',
      helper: 'Projected',
      trendLabel: '-3%',
      trendSeverity: 'danger',
      trendIcon: 'pi pi-arrow-down-right',
      icon: 'pi pi-wallet',
      accent: 'text-accent-600',
    },
  ];

  upcomingSessions: Array<UpcomingSession> = [
    {
      time: 'Today · 9:30 AM',
      title: 'Strength Foundations',
      location: 'Studio A',
      coach: 'Ava Carter',
      attendees: 12,
      capacity: 16,
      occupancy: 75,
      status: 'Confirmed',
      statusSeverity: 'success',
    },
    {
      time: 'Today · 1:00 PM',
      title: 'HIIT Circuit',
      location: 'Studio B',
      coach: 'Marcus Lee',
      attendees: 14,
      capacity: 18,
      occupancy: 78,
      status: 'Waitlist',
      statusSeverity: 'warn',
    },
    {
      time: 'Tomorrow · 8:00 AM',
      title: 'Mobility Flow',
      location: 'Studio C',
      coach: 'Sofia Gomez',
      attendees: 9,
      capacity: 12,
      occupancy: 75,
      status: 'Confirmed',
      statusSeverity: 'success',
    },
    {
      time: 'Tomorrow · 6:30 PM',
      title: 'Athlete Performance',
      location: 'Arena 1',
      coach: 'Dylan Park',
      attendees: 16,
      capacity: 20,
      occupancy: 80,
      status: 'Pending',
      statusSeverity: 'info',
    },
  ];

  readonly teamHighlights: ReadonlyArray<TeamHighlight> = [
    {
      name: 'Ava Carter',
      role: 'Lead Coach',
      availability: '2 slots open',
      status: 'Available',
      statusSeverity: 'success',
    },
    {
      name: 'Marcus Lee',
      role: 'Performance Coach',
      availability: 'Fully booked',
      status: 'Full',
      statusSeverity: 'danger',
    },
    {
      name: 'Sofia Gomez',
      role: 'Mobility Coach',
      availability: '3 slots open',
      status: 'Available',
      statusSeverity: 'success',
    },
  ];

  readonly alerts: ReadonlyArray<AlertItem> = [
    {
      title: 'Membership renewals due',
      description: '8 clients renew within 7 days. Send reminders.',
      time: '2 hours ago',
      severity: 'warn',
      tag: 'Action',
      icon: 'pi pi-bell',
    },
    {
      title: 'Equipment maintenance',
      description: 'Treadmill 4 logged 3 issues this week.',
      time: 'Yesterday',
      severity: 'danger',
      tag: 'Urgent',
      icon: 'pi pi-wrench',
    },
    {
      title: 'New review posted',
      description: '“Best trainer experience so far!” — Michelle R.',
      time: '1 day ago',
      severity: 'success',
      tag: 'Praise',
      icon: 'pi pi-star',
    },
  ];

  readonly topPrograms: ReadonlyArray<TopProgram> = [
    { name: 'Strength Foundations', occupancy: 88, revenue: '$6.2k' },
    { name: 'HIIT Circuit', occupancy: 82, revenue: '$5.5k' },
    { name: 'Mobility Flow', occupancy: 74, revenue: '$4.1k' },
  ];

  trackByLabel = (_: number, item: QuickAction) => item.label;
  trackByStat = (_: number, item: StatCard) => item.label;
  trackBySession = (_: number, item: UpcomingSession) => item.title;
  trackByMember = (_: number, item: TeamHighlight) => item.name;
  trackByAlert = (_: number, item: AlertItem) => item.title;
  trackByProgram = (_: number, item: TopProgram) => item.name;
}
