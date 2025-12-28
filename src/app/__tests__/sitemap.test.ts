import sitemap from '../sitemap';
import { config } from '@/lib/config';
import { getAllPosts } from '@/content/blog';

describe('sitemap', () => {
  it('includes core routes and blog posts', () => {
    const entries = sitemap();

    expect(entries[0].url).toBe(config.app.url);

    const posts = getAllPosts();
    expect(
      entries.some((entry) => entry.url === `${config.app.url}${posts[0].link}`)
    ).toBe(true);
  });
});
