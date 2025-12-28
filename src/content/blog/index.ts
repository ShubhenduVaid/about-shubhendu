import type { Article } from '@/types';
import type { ComponentType } from 'react';

export type BlogPostMeta = Article & {
  slug: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  Component: ComponentType;
};

const posts = [
  {
    slug: 'orchestrating-ai-tools',
    title: 'Orchestrating Multiple AI Tools: Building a Consensus CLI in Rust',
    excerpt:
      'Why AI tool fragmentation hurts delivery and how an open-source Rust CLI builds consensus across Amazon Q, Claude, Gemini, and local models.',
    date: 'Sep 13, 2025',
    dateIso: '2025-09-13',
    readTime: '6 min read',
    category: 'AI & Innovation',
    link: '/blog/orchestrating-ai-tools',
    image:
      'https://media.licdn.com/dms/image/v2/D4E12AQGeWolVFi5MgA/article-cover_image-shrink_720_1280/B4EZlEozbiKoAI-/0/1757793172987?e=2147483647&v=beta&t=XYqMzD54hShLr9v-nU8bKdidFAUSV1NOUvElgrFZxd0',
    tags: [
      'AI orchestration',
      'consensus',
      'Rust',
      'CLI',
      'Amazon Q',
      'Claude',
      'Gemini',
      'Ollama',
    ],
  },
  {
    slug: 'billion-record-retrieval',
    title: 'Efficiently Retrieving Data from 1 Billion Records',
    excerpt:
      'A practical Cassandra + Docker + Spring Boot walkthrough for fast reads at billion-scale with partitioned access patterns.',
    date: 'Nov 10, 2024',
    dateIso: '2024-11-10',
    readTime: '2 min read',
    category: 'Backend Engineering',
    link: '/blog/billion-record-retrieval',
    image:
      'https://media.licdn.com/dms/image/v2/D4E12AQHKTfr0nBfbiQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731010828278?e=2147483647&v=beta&t=dNpgizJfcXXZLNv4A_tR1mdeE2iXdEYt4-ceSdJHi4A',
    tags: [
      'Apache Cassandra',
      'Docker',
      'Spring Boot',
      'distributed systems',
      'data modeling',
      'partitioning',
    ],
  },
  {
    slug: 'innovation-with-practicality',
    title:
      'Innovation with Practicality: Why Engineering Leads Need to Be Commercially Minded',
    excerpt:
      'Five principles for balancing technical ambition with commercial impact, grounded in real leadership lessons.',
    date: 'Jul 6, 2024',
    dateIso: '2024-07-06',
    readTime: '3 min read',
    category: 'Engineering Leadership',
    link: '/blog/innovation-with-practicality',
    image:
      'https://media.licdn.com/dms/image/v2/D4E12AQGkk-9cvlt_aA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720269152770?e=2147483647&v=beta&t=x8uFf5mltKCLXvtmx2-q4fvkrM8mxOnznVuJKUnWu40',
    tags: [
      'engineering leadership',
      'commercial mindset',
      'product strategy',
      'innovation',
      'delivery',
    ],
  },
  {
    slug: 'from-engineer-to-engineering-manager',
    title: 'From Engineer to Engineering Manager',
    excerpt:
      'A guide for engineers moving into management, with five archetypes and how to grow beyond your default style.',
    date: 'Apr 21, 2024',
    dateIso: '2024-04-21',
    readTime: '3 min read',
    category: 'Engineering Management',
    link: '/blog/from-engineer-to-engineering-manager',
    image:
      'https://media.licdn.com/dms/image/v2/D4E12AQGSmSJDDWIbMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713726280779?e=2147483647&v=beta&t=Ae4tkHG-8IiG3dviziUtA1ep-M7-eFZsAQ46O6mucjQ',
    tags: [
      'engineering management',
      'leadership archetypes',
      'career growth',
      'coaching',
      'mentorship',
    ],
  },
] satisfies BlogPostMeta[];

const byDateDesc = (a: BlogPostMeta, b: BlogPostMeta) =>
  b.dateIso.localeCompare(a.dateIso);

export const getAllPosts = () => [...posts].sort(byDateDesc);

export const getLatestPosts = (count = 3) =>
  getAllPosts().slice(0, count);

export const getPostMetaBySlug = (slug: string) =>
  getAllPosts().find((post) => post.slug === slug);

const componentLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  'orchestrating-ai-tools': () =>
    import('./posts/orchestrating-ai-tools.mdx'),
  'billion-record-retrieval': () =>
    import('./posts/billion-record-retrieval.mdx'),
  'innovation-with-practicality': () =>
    import('./posts/innovation-with-practicality.mdx'),
  'from-engineer-to-engineering-manager': () =>
    import('./posts/from-engineer-to-engineering-manager.mdx'),
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const meta = getPostMetaBySlug(slug);
  const loader = componentLoaders[slug];

  if (!meta || !loader) {
    return null;
  }

  const mdxModule = await loader();

  return {
    ...meta,
    Component: mdxModule.default,
  };
};
