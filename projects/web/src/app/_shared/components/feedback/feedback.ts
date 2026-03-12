import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import type { ButtonSeverity } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FeedbackService, FeedbackCategory } from 'core';

@Component({
  selector: 'bee-feedback',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    TextareaModule,
    MessageModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './feedback.html',
  styleUrl: './feedback.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedbackComponent {
  private readonly _service = inject(FeedbackService);
  private readonly _toast = inject(MessageService);

  protected readonly visible = this._service.isOpen;

  protected readonly types: {
    key: FeedbackCategory;
    label: string;
    icon: string;
    severity: ButtonSeverity;
  }[] = [
    { key: 'bug', label: 'Bug Report', icon: 'bug_report', severity: 'danger' },
    { key: 'suggestion', label: 'Suggestion', icon: 'lightbulb', severity: 'warn' },
    { key: 'other', label: 'Other', icon: 'chat', severity: 'info' },
  ];

  protected readonly form = new FormGroup({
    type: new FormControl<FeedbackCategory | null>(this.types[0].key, Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  protected readonly isLoading = signal(false);
  protected readonly submitted = signal(false);

  protected onSubmit(): void {
    if (this.form.invalid || this.isLoading()) return;
    this.isLoading.set(true);
    const { type, title, message } = this.form.getRawValue();
    this._service
      .submit({ type: type!, title: title!, message: message! })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.isLoading.set(false);
          this.submitted.set(true);
          this._toast.add({
            severity: 'success',
            summary: 'Feedback sent',
            detail: 'Thank you for your feedback!',
            life: 4000,
          });
          this.onClose();
        },
        error: () => {
          this.isLoading.set(false);
          this._toast.add({
            severity: 'error',
            summary: 'Something went wrong',
            detail: 'Could not send feedback. Please try again.',
            life: 5000,
          });
        },
      });
  }

  protected onClose(): void {
    this._service.close();
  }

  protected onDialogHide(): void {
    this.form.reset({ type: this.types[0].key, title: '', message: '' });
    this.submitted.set(false);
  }
}
