import {
  Component,
  ChangeDetectionStrategy,
  input,
  model,
  output,
  signal,
  inject,
  effect,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';
import {
  ProfileService,
  FullProfileResponse,
  UpdateUserProfilePayload,
  FitnessLevel,
} from 'core';

interface FitnessForm {
  heightCm: number | null;
  weightKg: number | null;
  fitnessLevel: FitnessLevel | null;
  goals: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

@Component({
  selector: 'bee-edit-fitness-profile',
  imports: [
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    DividerModule,
  ],
  templateUrl: './edit-fitness-profile.html',
  styleUrl: './edit-fitness-profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditFitnessProfile {
  private readonly _profileService = inject(ProfileService);
  private readonly _messageService = inject(MessageService);

  readonly visible = model(false);
  readonly profile = input.required<FullProfileResponse>();
  readonly saved = output<void>();

  readonly saving = signal(false);

  readonly form = signal<FitnessForm>({
    heightCm: null,
    weightKg: null,
    fitnessLevel: null,
    goals: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
  });

  readonly fitnessOptions = [
    { label: 'Beginner', value: 'BEGINNER' as FitnessLevel },
    { label: 'Intermediate', value: 'INTERMEDIATE' as FitnessLevel },
    { label: 'Advanced', value: 'ADVANCED' as FitnessLevel },
  ];

  private readonly _initEffect = effect(() => {
    if (this.visible()) {
      const up = this.profile().userProfile;
      this.form.set({
        heightCm: up?.heightCm ?? null,
        weightKg: up?.weightKg ?? null,
        fitnessLevel: up?.fitnessLevel ?? null,
        goals: up?.goals?.join(', ') ?? '',
        emergencyContactName: up?.emergencyContactName ?? '',
        emergencyContactPhone: up?.emergencyContactPhone ?? '',
      });
    }
  });

  updateField(field: keyof FitnessForm, value: unknown): void {
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  save(): void {
    const up = this.profile().userProfile;
    const f = this.form();
    const payload: UpdateUserProfilePayload = {};

    if (f.heightCm !== (up?.heightCm ?? null)) payload.heightCm = f.heightCm ?? undefined;
    if (f.weightKg !== (up?.weightKg ?? null)) payload.weightKg = f.weightKg ?? undefined;
    if (f.fitnessLevel !== (up?.fitnessLevel ?? null)) payload.fitnessLevel = f.fitnessLevel ?? undefined;
    const newGoals = f.goals.split(',').map((g) => g.trim()).filter(Boolean);
    if (JSON.stringify(newGoals) !== JSON.stringify(up?.goals ?? [])) payload.goals = newGoals;
    if (f.emergencyContactName !== (up?.emergencyContactName ?? '')) payload.emergencyContactName = f.emergencyContactName || undefined;
    if (f.emergencyContactPhone !== (up?.emergencyContactPhone ?? '')) payload.emergencyContactPhone = f.emergencyContactPhone || undefined;

    if (!Object.keys(payload).length) {
      this.visible.set(false);
      this._messageService.add({ severity: 'info', summary: 'No changes', detail: 'No changes were made.' });
      return;
    }

    this.saving.set(true);
    this._profileService.updateUserProfile(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.visible.set(false);
        this._messageService.add({ severity: 'success', summary: 'Profile updated', detail: 'Fitness profile updated successfully.' });
        this.saved.emit();
      },
      error: (err) => {
        this.saving.set(false);
        this._messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message || 'Failed to update fitness profile.' });
      },
    });
  }
}
