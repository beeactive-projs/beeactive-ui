import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-services',
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = [
    {
      icon: 'pi-user',
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.',
      features: ['Custom workout plans', 'Progress tracking', 'Nutritional guidance', 'Weekly check-ins'],
    },
    {
      icon: 'pi-users',
      title: 'Group Classes',
      description: 'Join energetic group sessions and work out with others who share your fitness goals.',
      features: ['Various class types', 'Live and on-demand', 'Community support', 'Flexible scheduling'],
    },
    {
      icon: 'pi-mobile',
      title: 'Online Coaching',
      description: 'Get expert guidance from anywhere with our comprehensive online coaching programs.',
      features: ['Video consultations', 'Custom meal plans', 'Form check videos', '24/7 support'],
    },
    {
      icon: 'pi-chart-line',
      title: 'Performance Analytics',
      description: 'Advanced tracking and analytics to monitor your progress and optimize your training.',
      features: ['Detailed metrics', 'Progress visualization', 'Goal tracking', 'Performance insights'],
    },
    {
      icon: 'pi-calendar',
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your schedule with our easy-to-use calendar system.',
      features: ['Real-time availability', 'Easy rescheduling', 'Automated reminders', 'Calendar sync'],
    },
    {
      icon: 'pi-shield',
      title: 'Wellness Programs',
      description: 'Holistic wellness programs that address fitness, nutrition, and mental well-being.',
      features: ['Stress management', 'Sleep optimization', 'Mindfulness training', 'Lifestyle coaching'],
    },
  ];
}
