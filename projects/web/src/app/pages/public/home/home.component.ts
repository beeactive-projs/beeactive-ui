import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-home',
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly stars = [1, 2, 3, 4, 5];
  readonly avatars = ['SJ', 'MC', 'EW', 'AL', 'RB'];
  readonly activityBars = [40, 65, 45, 80, 55, 90, 70];
  readonly activityDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  stats = [
    { value: '10K+', label: 'Active Members', icon: 'pi-users' },
    { value: '500+', label: 'Certified Trainers', icon: 'pi-id-card' },
    { value: '50K+', label: 'Sessions Done', icon: 'pi-bolt' },
    { value: '4.9★', label: 'Average Rating', icon: 'pi-star-fill' },
  ];

  features = [
    {
      icon: 'pi-users',
      color: 'primary',
      title: 'Personal Training',
      description:
        'Get matched with certified trainers who craft customized workout plans tailored to your unique goals.',
    },
    {
      icon: 'pi-chart-line',
      color: 'accent',
      title: 'Progress Tracking',
      description:
        'Visual dashboards and detailed analytics keep your fitness progress front and center at all times.',
    },
    {
      icon: 'pi-calendar',
      color: 'primary',
      title: 'Smart Scheduling',
      description:
        'Book, reschedule, and manage your training sessions with an intuitive drag-and-drop calendar.',
    },
    {
      icon: 'pi-mobile',
      color: 'accent',
      title: 'Mobile-First',
      description:
        'Full access to workouts, training plans, and messaging on any device, anywhere, anytime.',
    },
    {
      icon: 'pi-heart',
      color: 'primary',
      title: 'Health Integration',
      description:
        'Sync with your favorite fitness wearables and health apps for a complete 360° view of your health.',
    },
    {
      icon: 'pi-comments',
      color: 'accent',
      title: 'Real-time Chat',
      description:
        'Stay in sync with your trainer through instant messaging and HD video calls anytime you need support.',
    },
  ];

  steps = [
    {
      icon: 'pi-user-plus',
      title: 'Create Your Account',
      description: 'Sign up in seconds and tell us about your fitness goals and current level.',
    },
    {
      icon: 'pi-search',
      title: 'Find Your Trainer',
      description:
        'Browse our verified trainer marketplace and pick the perfect match for your needs.',
    },
    {
      icon: 'pi-bolt',
      title: 'Start Training',
      description: 'Book your first session, follow your plan, and watch your progress grow daily.',
    },
  ];

  pricingPlans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started on your fitness journey.',
      popular: false,
      features: [
        '3 trainer connections',
        'Basic progress tracking',
        'Session scheduling',
        'Mobile app access',
      ],
      cta: 'Get Started',
      route: '/auth/signup',
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      description: 'Everything you need to reach your fitness goals faster.',
      popular: true,
      features: [
        'Unlimited trainer connections',
        'Advanced analytics & reports',
        'Priority session booking',
        'Health app integrations',
        'Real-time chat & video calls',
        'Nutrition tracking',
      ],
      cta: 'Start 14-Day Trial',
      route: '/auth/signup',
    },
    {
      name: 'Elite',
      price: '$79',
      period: 'per month',
      description: 'For serious athletes who demand the very best.',
      popular: false,
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        '1-on-1 nutrition coaching',
        'Custom branded experience',
        'Team management tools',
        'API access',
      ],
      cta: 'Contact Sales',
      route: '/contact',
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
        'As a professional athlete, I need precise tracking and expert guidance. BeeActive delivers both with an intuitive platform that keeps me at my peak performance.',
    },
    {
      name: 'Emma Williams',
      initials: 'EW',
      role: 'Busy Professional',
      quote:
        'The flexible scheduling and mobile access make it perfect for my busy lifestyle. I can train on my terms while staying connected with my trainer.',
    },
  ];
}
