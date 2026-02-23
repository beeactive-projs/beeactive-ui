import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  NgModule,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { BlogService } from './blog.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bee-blog',
  imports: [RouterLink, ButtonModule, SelectButtonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  private readonly blogService = inject(BlogService);

  readonly allPosts = this.blogService.posts;
  readonly selectedCategory = signal('All');

  // readonly categories = computed(() => ['All', ...new Set(this.allPosts.map((p) => p.category))]);

  // readonly filteredPosts = computed(() => {
  //   const cat = this.selectedCategory();
  //   return cat === 'All' ? this.allPosts : this.allPosts.filter((p) => p.category === cat);
  // });

  readonly featuredPost = computed(() => this.allPosts[0] ?? null);
  readonly gridPosts = computed(() => this.allPosts.slice(1));
}
