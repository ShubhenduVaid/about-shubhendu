import { render, screen } from '@testing-library/react';
import Home from '../page';
import data from '@/data';

describe('Home page', () => {
  it('renders key sections', () => {
    render(<Home />);

    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
    expect(
      screen.getByText('Frequently Asked Questions')
    ).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });
});
