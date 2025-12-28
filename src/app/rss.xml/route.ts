import { config } from '@/lib/config';
import { getAllPosts } from '@/content/blog';

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET = async () => {
  const posts = getAllPosts();
  const siteUrl = config.app.url;

  const items = posts
    .map((post) => {
      const url = `${siteUrl}${post.link}`;
      return `
        <item>
          <title>${escapeXml(post.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${new Date(post.dateIso).toUTCString()}</pubDate>
          <description>${escapeXml(post.excerpt)}</description>
        </item>
      `;
    })
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shubhendu Vaid Blog</title>
    <link>${siteUrl}/blog</link>
    <description>On-site articles by Shubhendu Vaid on engineering leadership, architecture, and reliable platforms.</description>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
