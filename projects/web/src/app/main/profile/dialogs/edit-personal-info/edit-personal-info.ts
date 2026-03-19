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
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { MessageService } from 'primeng/api';
import {
  ProfileService,
  FullProfileResponse,
  UpdateFullProfilePayload,
  Gender,
} from 'core';

interface PersonalInfoForm {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: Date | null;
  gender: Gender | null;
  medicalConditions: string;
  notes: string;
}

@Component({
  selector: 'bee-edit-personal-info',
  imports: [
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    DatePickerModule,
    DividerModule,
  ],
  templateUrl: './edit-personal-info.html',
  styleUrl: './edit-personal-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPersonalInfo {
  private readonly _profileService = inject(ProfileService);
  private readonly _messageService = inject(MessageService);

  readonly visible = model(false);
  readonly profile = input.required<FullProfileResponse>();
  readonly saved = output<void>();

  readonly saving = signal(false);
  readonly today = new Date();

  readonly form = signal<PersonalInfoForm>({
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: null,
    gender: null,
    medicalConditions: '',
    notes: '',
  });

  readonly genderOptions = [
    { label: 'Male', value: 'MALE' as Gender },
    { label: 'Female', value: 'FEMALE' as Gender },
    { label: 'Other', value: 'OTHER' as Gender },
    { label: 'Prefer not to say', value: 'PREFER_NOT_TO_SAY' as Gender },
  ];

  private readonly _initEffect = effect(() => {
    if (this.visible()) {
      const p = this.profile();
      const up = p.userProfile;
      this.form.set({
        firstName: p.user.firstName,
        lastName: p.user.lastName,
        phone: p.user.phone ?? '',
        dateOfBirth: up?.dateOfBirth ? this._parseDate(up.dateOfBirth) : null,
        gender: up?.gender ?? null,
        medicalConditions: up?.medicalConditions?.join(', ') ?? '',
        notes: up?.notes ?? '',
      });
    }
  });

  updateField(field: keyof PersonalInfoForm, value: unknown): void {
    this.form.update((f) => ({ ...f, [field]: value }));
  }

  save(): void {
    const p = this.profile();
    const up = p.userProfile;
    const f = this.form();
    const payload: UpdateFullProfilePayload = {};

    const userChanges: NonNullable<UpdateFullProfilePayload['user']> = {};
    if (f.firstName !== p.user.firstName) userChanges.firstName = f.firstName;
    if (f.lastName !== p.user.lastName) userChanges.lastName = f.lastName;
    if (f.phone !== (p.user.phone ?? '')) userChanges.phone = f.phone;
    if (Object.keys(userChanges).length) payload.user = userChanges;

    const profileChanges: NonNullable<UpdateFullProfilePayload['userProfile']> = {};
    const newDob = f.dateOfBirth ? this._formatDate(f.dateOfBirth) : '';
    if (newDob !== (up?.dateOfBirth ?? '')) profileChanges.dateOfBirth = newDob || undefined;
    if (f.gender !== (up?.gender ?? null)) profileChanges.gender = f.gender ?? undefined;
    const newMed = f.medicalConditions.split(',').map((m) => m.trim()).filter(Boolean);
    if (JSON.stringify(newMed) !== JSON.stringify(up?.medicalConditions ?? [])) profileChanges.medicalConditions = newMed;
    if (f.notes !== (up?.notes ?? '')) profileChanges.notes = f.notes || undefined;
    if (Object.keys(profileChanges).length) payload.userProfile = profileChanges;

    if (!payload.user && !payload.userProfile) {
      this.visible.set(false);
      this._messageService.add({ severity: 'info', summary: 'No changes', detail: 'No changes were made.' });
      return;
    }

    this.saving.set(true);
    this._profileService.updateFullProfile(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.visible.set(false);
        this._messageService.add({ severity: 'success', summary: 'Profile updated', detail: 'Personal information updated successfully.' });
        this.saved.emit();
      },
      error: (err) => {
        this.saving.set(false);
        this._messageService.add({ severity: 'error', summary: 'Error', detail: err.error?.message || 'Failed to update profile.' });
      },
    });
  }

  private _parseDate(s: string): Date {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  private _formatDate(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
}
