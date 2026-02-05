import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'bee-home',
  imports: [CommonModule, RouterLink, ButtonModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  features = [
    {
      icon: 'pi-users',
      title: 'Personal Training',
      description:
        'Connect with certified trainers who create customized workout plans tailored to your goals.',
    },
    {
      icon: 'pi-chart-line',
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed analytics and visual progress reports.',
    },
    {
      icon: 'pi-calendar',
      title: 'Session Scheduling',
      description: 'Easy-to-use calendar system for booking and managing your training sessions.',
    },
    {
      icon: 'pi-mobile',
      title: 'Mobile Access',
      description: 'Access your workouts and training plans anytime, anywhere on any device.',
    },
    {
      icon: 'pi-heart',
      title: 'Health Integration',
      description: 'Sync with popular fitness apps and wearables to track all your health metrics.',
    },
    {
      icon: 'pi-comments',
      title: 'Real-time Chat',
      description: 'Stay connected with your trainer through instant messaging and video calls.',
    },
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fitness Enthusiast',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      quote:
        'BeeActive transformed my fitness journey! The personalized training plans and constant support from my trainer helped me achieve goals I never thought possible.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Professional Athlete',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      quote:
        'As a professional athlete, I need precise tracking and expert guidance. BeeActive delivers both with an intuitive platform that keeps me at my peak.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Busy Professional',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      quote:
        'The flexible scheduling and mobile access make it perfect for my busy lifestyle. I can work out on my terms while staying connected with my trainer.',
      rating: 5,
    },
  ];

  stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'Certified Trainers' },
    { value: '50K+', label: 'Sessions Completed' },
    { value: '4.9', label: 'Average Rating' },
  ];
}
