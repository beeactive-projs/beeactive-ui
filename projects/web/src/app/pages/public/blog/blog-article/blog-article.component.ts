import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import { BlogService } from '../blog.service';

@Component({
  selector: 'bee-blog-article',
  imports: [RouterLink, ButtonModule],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticleComponent {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  private readonly slug = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((p) => p.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly post = computed(() => this.blogService.getPostBySlug(this.slug()));

  readonly relatedPosts = computed(() => {
    const p = this.post();
    if (!p) return [];
    return this.blogService.getRelatedPosts(p.slug, p.category);
  });

  constructor() {
    effect(() => {
      if (this.slug() && !this.post()) {
        this.router.navigate(['/error/not-found']);
      }
    });
  }
}
