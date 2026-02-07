import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-home',
  imports: [RouterLink, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'Certified Trainers' },
    { value: '50K+', label: 'Sessions Completed' },
    { value: '4.9', label: 'Average Rating' },
  ];

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

  steps = [
    {
      icon: 'pi-user-plus',
      title: 'Create Your Account',
      description: 'Sign up in seconds and tell us about your fitness goals and preferences.',
    },
    {
      icon: 'pi-search',
      title: 'Find Your Trainer',
      description: 'Browse certified trainers and pick the perfect match for your needs.',
    },
    {
      icon: 'pi-bolt',
      title: 'Start Training',
      description: 'Book your first session, follow your plan, and watch your progress grow.',
    },
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      initials: 'SJ',
      role: 'Fitness Enthusiast',
      quote:
        'BeeActive transformed my fitness journey! The personalized training plans and constant support from my trainer helped me achieve goals I never thought possible.',
    },
    {
      name: 'Michael Chen',
      initials: 'MC',
      role: 'Professional Athlete',
      quote:
        'As a professional athlete, I need precise tracking and expert guidance. BeeActive delivers both with an intuitive platform that keeps me at my peak.',
    },
    {
      name: 'Emma Williams',
      initials: 'EW',
      role: 'Busy Professional',
      quote:
        'The flexible scheduling and mobile access make it perfect for my busy lifestyle. I can work out on my terms while staying connected with my trainer.',
    },
  ];
}
