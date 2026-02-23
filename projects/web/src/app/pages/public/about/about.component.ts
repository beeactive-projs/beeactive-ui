import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-about',
  imports: [RouterLink, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly stats = [
    { value: '2020', label: 'Founded' },
    { value: '10K+', label: 'Active Members' },
    { value: '500+', label: 'Certified Trainers' },
    { value: '4.9★', label: 'Average Rating' },
  ];

  readonly values = [
    {
      icon: 'pi-heart',
      title: 'Passion',
      description:
        'We genuinely care about fitness outcomes. Every feature we build starts from wanting real people to feel stronger, healthier, and more confident.',
    },
    {
      icon: 'pi-users',
      title: 'Community',
      description:
        'Great fitness is never a solo journey. We connect members and trainers into a supportive network that holds each other accountable and celebrates every win.',
    },
    {
      icon: 'pi-shield',
      title: 'Trust',
      description:
        'Every trainer on BeeActive is verified and certified. We maintain rigorous standards so members can book with complete confidence in the people they train with.',
    },
    {
      icon: 'pi-star',
      title: 'Excellence',
      description:
        'Average is not in our vocabulary. We hold our platform, our trainers, and ourselves to the highest standards of quality, safety, and continuous improvement.',
    },
  ];

  readonly team = [
    {
      name: 'John Doe',
      initials: 'JD',
      role: 'CEO & Co-Founder',
      bio: 'Former professional athlete turned entrepreneur. John built BeeActive after experiencing firsthand how inaccessible quality coaching was outside major cities.',
    },
    {
      name: 'Jane Smith',
      initials: 'JS',
      role: 'Head of Training',
      bio: 'NSCA-certified strength & conditioning specialist with 12 years of coaching experience. Jane ensures every trainer on the platform meets our high standards.',
    },
    {
      name: 'Mike Johnson',
      initials: 'MJ',
      role: 'Tech Lead',
      bio: 'Engineering lead with a background in health-tech. Mike obsesses over the details that make the BeeActive experience feel effortless for trainers and members alike.',
    },
    {
      name: 'Sarah Williams',
      initials: 'SW',
      role: 'Head of Operations',
      bio: 'Operations expert who keeps the ecosystem running smoothly. Sarah\'s systems ensure every session, payment, and interaction goes exactly as planned.',
    },
  ];

  readonly milestones = [
    { icon: 'pi-bolt', value: '2020', label: 'Founded', color: 'primary' },
    { icon: 'pi-users', value: '10K+', label: 'Members', color: 'accent' },
    { icon: 'pi-id-card', value: '500+', label: 'Trainers', color: 'primary' },
  ];
}
