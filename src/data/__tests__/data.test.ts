import data, {
  achievements,
  advisoryServices,
  caseStudies,
  footerLinks,
  navLinks,
  stats,
} from '../index';
import { faqs } from '../faqs';

describe('data exports', () => {
  it('includes core profile data', () => {
    expect(data.name).toBe('Shubhendu Vaid');
    expect(data.experiences.length).toBeGreaterThan(0);
    expect(data.contact.email).toContain('@');
  });

  it('exports navigation and footer links', () => {
    expect(navLinks.length).toBeGreaterThan(0);
    expect(footerLinks.length).toBeGreaterThan(0);
    expect(navLinks.some((link) => link.id === 'about')).toBe(true);
  });

  it('exports stats and achievements', () => {
    expect(stats.length).toBeGreaterThan(0);
    expect(achievements.length).toBeGreaterThan(0);
  });

  it('exports advisory services and case studies', () => {
    expect(advisoryServices.length).toBeGreaterThan(0);
    expect(advisoryServices[0].items.length).toBeGreaterThan(0);
    expect(caseStudies.length).toBeGreaterThan(0);
    expect(caseStudies[0]).toHaveProperty('slug');
  });

  it('exports FAQs', () => {
    expect(faqs.length).toBeGreaterThan(0);
    expect(faqs[0]).toHaveProperty('question');
    expect(faqs[0]).toHaveProperty('answer');
  });
});
