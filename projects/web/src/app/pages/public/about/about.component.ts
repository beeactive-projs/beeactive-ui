import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bee-about',
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  values = [
    { icon: 'pi-heart', title: 'Passion', description: 'We are passionate about helping people achieve their fitness goals.' },
    { icon: 'pi-users', title: 'Community', description: 'Building a supportive community of fitness enthusiasts and professionals.' },
    { icon: 'pi-shield', title: 'Trust', description: 'Providing a secure and reliable platform you can trust.' },
    { icon: 'pi-star', title: 'Excellence', description: 'Committed to delivering exceptional service and results.' },
  ];

  team = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
    { name: 'Jane Smith', role: 'Head of Training', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' },
    { name: 'Mike Johnson', role: 'Tech Lead', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
    { name: 'Sarah Williams', role: 'Head of Operations', image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2' },
  ];
}
