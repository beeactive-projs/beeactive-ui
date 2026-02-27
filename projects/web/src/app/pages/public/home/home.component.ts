import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-home',
  imports: [ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  roadmap = [
    {
      icon: 'pi-users',
      title: 'Hubs & Groups',
      description: 'Create your space, invite your people, and organise everything in one place.',
      ready: false,
    },
    {
      icon: 'pi-calendar',
      title: 'Sessions & Scheduling',
      description: 'Plan activities, set recurring sessions, and let people join with one tap.',
      ready: false,
    },
    {
      icon: 'pi-pen-to-square',
      title: 'Blog & Updates',
      description: 'Share stories, tips, and news to keep your community in the loop.',
      ready: true,
    },
    {
      icon: 'pi-user',
      title: 'Profiles',
      description: 'A home for every organiser and participant — your activity, your way.',
      ready: false,
    },
  ];
}
