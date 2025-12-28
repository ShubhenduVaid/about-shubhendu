import { render, screen } from '@testing-library/react';
import BlogPostPage, {
  generateMetadata,
  generateStaticParams,
} from '../blog/[slug]/page';
import { getAllPosts } from '@/content/blog';

describe('BlogPostPage', () => {
  it('returns static params for posts', async () => {
    const params = await generateStaticParams();
    const posts = getAllPosts();

    expect(params).toEqual(
      expect.arrayContaining([{ slug: posts[0].slug }])
    );
  });

  it('generates metadata for known slugs', async () => {
    const posts = getAllPosts();
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: posts[0].slug }),
    });

    expect(metadata).toHaveProperty('title', posts[0].title);
    expect(metadata).toHaveProperty('description', posts[0].excerpt);

    const missing = await generateMetadata({
      params: Promise.resolve({ slug: 'missing-post' }),
    });

    expect(missing).toEqual({});
  });

  it('renders a blog post page for a valid slug', async () => {
    const post = getAllPosts()[0];
    const page = await BlogPostPage({
      params: Promise.resolve({ slug: post.slug }),
    });

    render(page);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.excerpt)).toBeInTheDocument();
    expect(screen.getByText(post.category)).toBeInTheDocument();
  });
});
