import { Routes } from '@angular/router';

export const publicRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    title: 'BeeActive — Where active communities come together',
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    title: 'About - BeeActive',
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog.component').then((m) => m.BlogComponent),
    title: 'Blog - BeeActive',
  },
  {
    path: 'blog/:slug',
    loadComponent: () =>
      import('./blog/blog-article/blog-article.component').then((m) => m.BlogArticleComponent),
    title: 'BeeActive Blog',
  },
];
