import { render, screen } from '@testing-library/react';
import BlogPage from '../blog/page';
import { getAllPosts } from '@/content/blog';

describe('BlogPage', () => {
  it('renders blog listing', () => {
    render(<BlogPage />);

    expect(screen.getByText('Blog')).toBeInTheDocument();

    const posts = getAllPosts();
    expect(screen.getByText(posts[0].title)).toBeInTheDocument();
  });
});
