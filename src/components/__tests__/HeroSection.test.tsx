import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';
import data from '@/data';

describe('HeroSection', () => {
  it('renders the hero section with name and title', () => {
    render(<HeroSection />);

    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(data.title)).toBeInTheDocument();
  });
});
