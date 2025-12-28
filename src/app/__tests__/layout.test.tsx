import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';
import data from '@/data';

describe('RootLayout', () => {
  it('renders navigation, content, and footer', () => {
    const { container } = render(
      <RootLayout>
        <div>Child content</div>
      </RootLayout>
    );

    expect(screen.getByText('SV')).toBeInTheDocument();
    expect(screen.getByText('Child content')).toBeInTheDocument();
    expect(screen.getByText(data.contact.email)).toBeInTheDocument();

    const jsonLdScripts = container.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    expect(jsonLdScripts.length).toBeGreaterThan(0);
  });
});
