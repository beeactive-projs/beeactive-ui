import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, of, shareReplay, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';
import type { BlogPostData } from 'core';
import { BlogService } from 'core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'bee-blog-article',
  imports: [RouterLink, ButtonModule, DatePipe],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogArticleComponent {
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  private readonly post$ = inject(ActivatedRoute).paramMap.pipe(
    map((p) => p.get('slug') ?? ''),
    filter((slug) => slug.length > 0),
    switchMap((slug) =>
      this.blogService.getBySlug(slug).pipe(
        catchError(() => {
          this.router.navigate(['/error/not-found']);
          return of(null as BlogPostData | null);
        }),
      ),
    ),
    shareReplay(1),
  );

  readonly post = toSignal<BlogPostData | null>(this.post$, { initialValue: null });

  readonly relatedPosts = toSignal(
    this.post$.pipe(
      switchMap((post) => {
        if (!post) return of([] as BlogPostData[]);
        return this.blogService
          .getRelatedPosts(post.slug, post.category)
          .pipe(catchError(() => of([] as BlogPostData[])));
      }),
    ),
    { initialValue: [] as BlogPostData[] },
  );
}
