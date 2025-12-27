import type { CaseStudy } from '@/types';

export const caseStudies = [
  {
    slug: 'web-app-platform',
    title: 'Web & App Platform',
    client: 'BT Group',
    period: '2024-2025',
    summary:
      'Developed a platform to create web and native apps which are themable from a single codebase, reducing development time and costs.',
  },
  {
    slug: 'convergence-platform',
    title: 'Convergence Platform',
    client: 'BT Group',
    period: '2023-2024',
    summary:
      'Architected a platform for seamless integration of products and services, enabling faster time-to-market and improved customer experience.',
  },
  {
    slug: 'ecommerce-experience',
    title: 'E-commerce Experience',
    client: 'BT Group',
    period: '2023-2024',
    summary:
      'Led the development of e-commerce transaction journeys for Business Broadband, enhancing user experience and increasing conversion rates.',
  },
  {
    slug: 'investment-banking-platform',
    title: 'Investment Banking Platform',
    client: 'JPMorgan Chase & Co',
    period: '2021-2022',
    summary:
      'Engineered a digital platform for investment banking, streamlining integration among apps and automating onboarding processes.',
  },
] satisfies CaseStudy[];
