import type {
  AdvisoryService,
  Article,
  Achievement,
  NavLink,
  StatItem,
} from '@/types';

export const navLinks = [
  { id: 'about', label: 'About Me', href: '#section-about' },
  { id: 'experience', label: 'Experience', href: '#section-experience' },
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies' },
  { id: 'articles', label: 'Latest Articles', href: '#section-articles' },
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
  { id: 'articles', label: 'Blog', href: '#section-articles' },
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

export const articles = [
  {
    title: 'Orchestrating Multiple AI Tools: Building Consensus CLI',
    excerpt:
      'Exploring how to orchestrate multiple AI tools effectively and building consensus-driven command line interfaces.',
    date: 'Sep 13, 2025',
    dateIso: '2025-09-13',
    readTime: '3 min read',
    category: 'AI & Innovation',
    link: 'https://www.linkedin.com/pulse/orchestrating-multiple-ai-tools-building-consensus-cli-shubhendu-vaid-5m9te/',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Efficiently retrieving data from 1 billion records',
    excerpt:
      "Retrieving large-scale datasets efficiently is key to maintaining competitive, high-performing applications. For many developers and engineers, the challenge isn't just in storing massive amounts of data but in ensuring that data retrieval remains quick and reliable, even as datasets grow to millions or billions of records.",
    date: 'Nov 10, 2024',
    dateIso: '2024-11-10',
    readTime: '10 min read',
    category: 'Backend Engineering',
    link: 'https://www.linkedin.com/pulse/efficiently-retrieving-data-from-1-billion-records-shubhendu-vaid-bo7we/',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Innovation with Practicality in Engineering Leadership',
    excerpt:
      'Balancing innovation with practical implementation is crucial for engineering leaders. Learn how to foster creativity while maintaining delivery excellence and team productivity.',
    date: 'Jul 6, 2024',
    dateIso: '2024-07-06',
    readTime: '4 min read',
    category: 'Engineering Leadership',
    link: 'https://www.linkedin.com/pulse/innovation-practicality-why-engineering-leads-need-minded-vaid-qleze/',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Engineering Management and Leadership Styles',
    excerpt:
      'Understanding different leadership styles in engineering management and how to adapt your approach based on team dynamics, project requirements, and organizational culture.',
    date: 'Apr 21, 2024',
    dateIso: '2024-04-21',
    readTime: '5 min read',
    category: 'Engineering Management',
    link: 'https://www.linkedin.com/pulse/from-engineer-engineering-manager-shubhendu-vaid-cvk9e/',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Node.js Microservices with DynamoDB',
    excerpt:
      'Building scalable microservices using Node.js and DynamoDB. Explore patterns for data modeling, performance optimization, and maintaining consistency in distributed systems.',
    date: 'Apr 3, 2024',
    dateIso: '2024-04-03',
    readTime: '6 min read',
    category: 'Microservices',
    link: 'https://www.linkedin.com/pulse/how-create-nodejs-microservice-persisting-data-dynamodb-vaid-dscke/',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Leveraging Adapter Design Pattern for Seamless CMS Integrations',
    excerpt:
      'In the ever-evolving landscape of content management systems (CMS), creating robust integrations with various platforms can be a challenging yet crucial task. I am excited to share our successful journey in implementing the Adapter Design Pattern to streamline and enhance our CMS integrations.',
    date: 'Feb 20, 2024',
    dateIso: '2024-02-20',
    readTime: '2 min read',
    category: 'Architecture',
    link: 'https://medium.com/@vaidshubhendu/leveraging-adapter-design-pattern-for-seamless-cms-integrations-15b8544f4bed',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
] satisfies Article[];
