import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';
import data from '@/data';

describe('AboutSection', () => {
  it('renders the about section with headline', () => {
    render(<AboutSection />);

    expect(screen.getByText(data.about.headline)).toBeInTheDocument();
  });

  it('renders about content paragraphs', () => {
    render(<AboutSection />);

    expect(screen.getByText(data.about.contents[0])).toBeInTheDocument();
  });
});
