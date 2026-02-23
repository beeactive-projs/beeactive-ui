export interface ContentBlock {
  type: 'h2' | 'h3' | 'p' | 'ul';
  text?: string;
  items?: string[];
}

export interface BlogAuthor {
  name: string;
  initials: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: string;
  coverImage: string;
  author: BlogAuthor;
  publishedAt: string;
  readTime: number;
  tags: string[];
}
