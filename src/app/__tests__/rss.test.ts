import { GET } from '../rss.xml/route';
import { getAllPosts } from '@/content/blog';

describe('rss route', () => {
  it('returns rss response with posts', async () => {
    const response = await GET();

    expect(response.headers.get('Content-Type')).toBe(
      'application/rss+xml; charset=utf-8'
    );

    const body = await response.text();
    const posts = getAllPosts();

    expect(body).toContain('<rss');
    expect(body).toContain(posts[0].title);
  });
});
