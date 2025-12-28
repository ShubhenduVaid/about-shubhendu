import { render, screen } from '@testing-library/react';
import CaseStudiesPage from '../case-studies/page';
import { caseStudies } from '@/data';

describe('CaseStudiesPage', () => {
  it('renders case studies content', () => {
    render(<CaseStudiesPage />);

    expect(screen.getByText('Case Studies')).toBeInTheDocument();
    expect(screen.getByText(caseStudies[0].title)).toBeInTheDocument();
    expect(
      screen.getByText('Learn about my leadership philosophy')
    ).toBeInTheDocument();
  });
});
