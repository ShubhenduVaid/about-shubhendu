import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the hero section with name and title', () => {
    render(<HeroSection />);

    expect(screen.getByText('Shubhendu Vaid')).toBeInTheDocument();
    expect(screen.getByText('Engineering Leader')).toBeInTheDocument();
  });
});
