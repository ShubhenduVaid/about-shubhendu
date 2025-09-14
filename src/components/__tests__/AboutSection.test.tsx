import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders the about section with headline', () => {
    render(<AboutSection />);

    expect(
      screen.getByText(/Engineering Leader with a passion/i)
    ).toBeInTheDocument();
  });

  it('renders about content paragraphs', () => {
    render(<AboutSection />);

    expect(
      screen.getByText(/My expertise encompasses event-driven architecture/i)
    ).toBeInTheDocument();
  });
});
