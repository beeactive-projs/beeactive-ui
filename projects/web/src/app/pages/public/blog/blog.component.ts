import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import type { BlogPostData } from 'core';
import { BlogService } from 'core';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'bee-blog',
  imports: [RouterLink, ButtonModule, SelectButtonModule, FormsModule, DatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);

  readonly allPosts = toSignal(this.blogService.getAllPostData(), {
    initialValue: [] as BlogPostData[],
  });
  readonly selectedCategory = signal('All');

  readonly featuredPost = computed(() => this.allPosts()[0] ?? null);
  readonly gridPosts = computed(() => this.allPosts().slice(1));
}
