import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeedbackComponent } from './_shared/components/feedback/feedback';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FeedbackComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('web');
}
