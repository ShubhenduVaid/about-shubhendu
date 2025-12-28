import { render, screen } from '@testing-library/react';
import LeadershipPhilosophyPage from '../leadership-philosophy/page';
import data, { achievements } from '@/data';

describe('LeadershipPhilosophyPage', () => {
  it('renders leadership philosophy content', () => {
    render(<LeadershipPhilosophyPage />);

    expect(
      screen.getByText('Leadership Philosophy')
    ).toBeInTheDocument();
    expect(screen.getByText(data.about.headline)).toBeInTheDocument();
    expect(screen.getByText('How I lead')).toBeInTheDocument();
    expect(screen.getByText(achievements[0])).toBeInTheDocument();
  });
});
