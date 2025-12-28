import type { MetadataRoute } from 'next';
import { config } from '@/lib/config';
import { getAllPosts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.app.url;
  const currentDate = new Date();

  const posts = getAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map<MetadataRoute.Sitemap[number]>((post) => ({
      url: `${baseUrl}${post.link}`,
      lastModified: new Date(post.dateIso),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/leadership-philosophy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
