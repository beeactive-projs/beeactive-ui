import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProfileService, FullProfileResponse, Gender, FitnessLevel, TagSeverity } from 'core';
import { EditPersonalInfo } from './dialogs/edit-personal-info/edit-personal-info';
import { EditFitnessProfile } from './dialogs/edit-fitness-profile/edit-fitness-profile';
import { EditInstructorProfile } from './dialogs/edit-instructor-profile/edit-instructor-profile';
import { BecomeInstructor } from '../client/dialogs/become-instructor/become-instructor';

@Component({
  selector: 'bee-profile',
  imports: [
    DatePipe,
    CardModule,
    AvatarModule,
    TagModule,
    DividerModule,
    ButtonModule,
    SkeletonModule,
    ToastModule,
    EditPersonalInfo,
    EditFitnessProfile,
    EditInstructorProfile,
    BecomeInstructor,
  ],
  providers: [MessageService],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile implements OnInit {
  private readonly _profileService = inject(ProfileService);
  private readonly _messageService = inject(MessageService);

  readonly profile = signal<FullProfileResponse | null>(null);
  readonly loading = signal(true);
  readonly showEditPersonalInfo = signal(false);
  readonly showEditFitnessProfile = signal(false);
  readonly showEditInstructor = signal(false);
  readonly becomeInstructorVisible = signal(false);

  readonly fullName = computed(() => {
    const p = this.profile();
    return p ? `${p.user.firstName} ${p.user.lastName}` : '';
  });

  readonly initials = computed(() => {
    const p = this.profile();
    if (!p) return '';
    return `${p.user.firstName.charAt(0)}${p.user.lastName.charAt(0)}`.toUpperCase();
  });

  readonly isInstructor = computed(() => {
    const p = this.profile();
    if (!p) return false;
    return p.roles.includes('INSTRUCTOR') || p.roles.includes('ORGANIZER');
  });

  readonly hasInstructorProfile = computed(() => this.profile()?.instructorProfile != null);

  readonly formattedGender = computed(() => {
    const gender = this.profile()?.userProfile?.gender;
    if (!gender) return null;
    const map: Record<Gender, string> = {
      MALE: 'Male',
      FEMALE: 'Female',
      OTHER: 'Other',
      PREFER_NOT_TO_SAY: 'Prefer not to say',
    };
    return map[gender];
  });

  readonly formattedFitnessLevel = computed(() => {
    const level = this.profile()?.userProfile?.fitnessLevel;
    if (!level) return null;
    const map: Record<FitnessLevel, string> = {
      BEGINNER: 'Beginner',
      INTERMEDIATE: 'Intermediate',
      ADVANCED: 'Advanced',
    };
    return map[level];
  });

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.loading.set(true);
    this._profileService.getFullProfile().subscribe({
      next: (data) => {
        this.profile.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to load profile data',
        });
      },
    });
  }

  roleSeverity(role: string): TagSeverity {
    switch (role) {
      case 'SUPER_ADMIN':
        return TagSeverity.Danger;
      case 'ADMIN':
        return TagSeverity.Warn;
      case 'INSTRUCTOR':
      case 'ORGANIZER':
        return TagSeverity.Info;
      case 'SUPPORT':
        return TagSeverity.Contrast;
      default:
        return TagSeverity.Secondary;
    }
  }
}
