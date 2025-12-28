import type {
  AdvisoryService,
  Achievement,
  NavLink,
  StatItem,
} from '@/types';

export const navLinks = [
  { id: 'about', label: 'About Me', href: '#section-about' },
  { id: 'experience', label: 'Experience', href: '#section-experience' },
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
  { id: 'articles', label: 'Blog', href: '/blog' },
  { id: 'advisory', label: 'Advisory', href: '#section-advisory' },
  {
    id: 'leadership-philosophy',
    label: 'Leadership Philosophy',
    href: '/leadership-philosophy',
  },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Get In Touch', href: '#section-contact' },
] satisfies NavLink[];

export const footerLinks = [
  { id: 'about', label: 'About Me', href: '#section-about' },
  { id: 'experience', label: 'Experience', href: '#section-experience' },
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
  { id: 'articles', label: 'Blog', href: '/blog' },
  {
    id: 'leadership-philosophy',
    label: 'Leadership Philosophy',
    href: '/leadership-philosophy',
  },
  { id: 'advisory', label: 'Advisory', href: '#section-advisory' },
] satisfies NavLink[];

export const stats = [
  {
    icon: 'award',
    value: '14+',
    label: 'Years of Experience',
    description:
      'Progressive software engineering experience from individual contributor to senior leadership',
  },
  {
    icon: 'users',
    value: '50+',
    label: 'Team Members Led',
    description:
      'Successfully managed and mentored engineering teams across multiple organizations',
  },
  {
    icon: 'code',
    value: '8',
    label: 'Engineering Squads',
    description: 'Successfully managed and mentored 8 engineering squads',
  },
  {
    icon: 'map-pin',
    value: '3',
    label: 'Countries Worked',
    description:
      'International experience across UK, Poland, and India with remote team leadership',
  },
] satisfies StatItem[];

export const achievements = [
  'Achieved 5x improvement in page load times using Next.js optimization',
  'Delivered zero order loss in sales/renew experience rebuild at BT Group',
  'Reduced call handling times by 30% nationwide with custom CRM solution at Bharti Airtel',
  'Scaled APIs to handle 6,000 requests per minute using Java and MongoDB at PwC',
  'Led successful AWS migration enhancing scalability and performance',
] satisfies Achievement[];

export const advisoryServices = [
  {
    title: 'Engineering Leadership Coaching',
    items: [
      'Transitioning from IC to manager/leader',
      'Team scaling, hiring, and performance culture',
      'Delivery excellence and stakeholder management',
    ],
  },
  {
    title: 'Architecture & Platform Reviews',
    items: [
      'Next.js/React and Node.js system design',
      'Event-driven and microservices architecture',
      'Performance, reliability, and cloud cost tuning',
    ],
  },
  {
    title: 'Generative AI Advisory',
    items: [
      'LLM/RAG solution design and evaluation',
      'Practical AI adoption for product teams',
      'Guardrails, quality, and responsible AI',
    ],
  },
] satisfies AdvisoryService[];
