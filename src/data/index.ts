import { PersonalData } from '@/types';

const data: PersonalData = {
  name: 'Shubhendu Vaid',
  title: 'Senior Software Engineering Manager & Engineering Leader',
  location: 'London, UK',
  description:
    'Senior Software Engineering Manager with 14+ years of experience building and scaling web and cloud platforms. Specializing in Next.js, React, Node.js, TypeScript, AWS/GCP, event-driven architecture, and Generative AI.',
  about: {
    headline:
      'Engineering leader focused on building scalable products, high‑performing teams, and customer‑centric digital experiences.',
    contents: [
      "I’ve spent my career shipping large‑scale customer journeys and internal platforms across telecom, banking, consulting, and product engineering. My core strengths are modern web platforms (Next.js/React), backend services (Node/Java), and cloud-native delivery on AWS and GCP.",
      "I’m passionate about performance, quality, and pragmatic architecture — from event‑driven systems and microservices to front‑end frameworks that scale across squads.",
      'As a leader, I coach and mentor engineers, grow teams, and set technical strategy that balances innovation with reliable delivery.',
      'I also advise teams on practical Generative AI adoption, including LLM‑powered product features, RAG architectures, and evaluation/guardrails.',
    ],
  },
  experiences: [
    {
      title: 'Senior Software Engineering Manager',
      location: 'London, UK',
      company: 'BT Group',
      period: 'Sept 2023 - Present',
      description:
        "Engineering Lead for BT Business Broadband SMB Learn–Buy–Get acquisition and renewals journey. Architected a front‑end framework and CMS adapter pattern, rebuilt sales/renew experiences with Next.js/React/Node/Java on AWS, and delivered LLM‑powered help and recommendation features. Scaled a full‑stack team from 7 to 30+ across the UK and India while defining multi‑squad technical strategy.",
    },
    {
      title: 'Engineering Manager',
      location: 'London, UK',
      company: 'BT Group',
      period: 'Apr 2022 - Aug 2023',
      description:
        'Led development of all transaction journeys for business.bt.com from inception. Architected cloud migration to AWS, improving resilience and scalability, and introduced automated testing/CI‑CD to speed delivery. Managed and mentored a 7‑engineer team focused on performance and reliability.',
    },
    {
      title: 'Lead Software Engineer',
      location: 'Glasgow, UK',
      company: 'JPMorgan Chase & Co',
      period: 'Mar 2021 - Mar 2022',
      description: `Engineered a sophisticated digital platform catering to the investment banking sector, encompassing web and native applications. Streamlined integration among apps to facilitate the smooth transfer of large volumes of data. Mentored junior engineers, promoting knowledge-sharing and best practices. Contributed to architecture discussions, focusing on scalability and performance optimization.`,
    },
    {
      title: 'Lead Engineer',
      location: 'Gdansk, Poland',
      company: 'PwC',
      period: 'Mar 2020 - Feb 2021',
      description:
        'Designed and built a KYC solution from scratch using TypeScript, React, Node.js, and MongoDB. Led a 4‑developer team, migrated data from SharePoint, and scaled APIs to handle ~6,000 TPM with strong test coverage and observability.',
    },
    {
      title: 'Senior Software Engineer',
      location: 'Gdansk, Poland',
      company: 'EPAM Systems',
      period: 'Mar 2018 - Feb 2020',
      description:
        'Worked in a distributed US/Poland team on Cigna health‑insurance platforms. Built transaction and audit workflows using Angular, Java, Spring Boot, and reactive programming, with a focus on scalability and performance.',
    },
    {
      title: 'Senior Software Engineer',
      location: 'Gurugram, India',
      company: 'Bharti Airtel',
      period: 'Feb 2016 - Feb 2018',
      description:
        'Developed a custom CRM and chatbot solution, reducing call handling times by 30% nationwide. Led POCs for workflow automation, enhancing operational efficiency.',
    },
    {
      title: 'Senior Software Engineer',
      location: 'Noida, India',
      company: 'Ingenuity Gaming',
      period: 'Dec 2014 - Feb 2016',
      description:
        'Created a slot game (Hi-Lo Roller) for Sigma using JavaScript and event-driven design.',
    },
    {
      title: 'Software Engineer',
      location: 'Jaipur, India',
      company: 'Commelius Solutions',
      period: 'Jul 2010 - Nov 2014',
      description:
        'Developed a framework for bespoke e-learning solutions, focusing on reusable components.',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Electron',
    'AWS',
    'Google Cloud Platform (GCP)',
    'MongoDB',
    'Playwright',
    'React Testing Library',
    'Redux Toolkit',
    'Event‑Driven Architecture',
    'Microservices',
    'Kafka',
    'Java',
    'Spring Boot',
    'Angular',
    'Generative AI',
    'Agile / Lean Delivery',
    'CI/CD',
    'TDD',
    'Observability',
    'Mentoring',
    'Engineering Leadership',
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      year: 2009,
      institution: 'Rajasthan Technical University, Kota',
      location: 'India',
    },
  ],
  projects: [
    {
      name: 'Web & App Platform',
      client: 'BT Group',
      period: '2024-2025',
      description:
        'Developed a platform to create web and native apps which are themable from a single codebase, reducing development time and costs.',
    },
    {
      name: 'Convergence Platform',
      client: 'BT Group',
      period: '2023-2024',
      description:
        'Architected a platform for seamless integration of products and services, enabling faster time-to-market and improved customer experience.',
    },
    {
      name: 'E-commerce Experience',
      client: 'BT Group',
      period: '2023-2024',
      description:
        'Led the development of e-commerce transaction journeys for Business Broadband, enhancing user experience and increasing conversion rates.',
    },
    {
      name: 'Investment Banking Platform',
      client: 'JPMorgan Chase & Co',
      period: '2021-2022',
      description:
        'Engineered a digital platform for investment banking, streamlining integration among apps and automating onboarding processes.',
    },
  ],
  contact: {
    email: 'vaidshubhendu@gmail.com',
    phone: '+44 7835735172',
    linkedin: 'https://www.linkedin.com/in/shubhendu-vaid/',
    github: 'https://github.com/ShubhenduVaid',
    website: 'https://www.shubhenduvaid.com',
  },
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubhendu-vaid/',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/ShubhenduVaid',
    },
    {
      platform: 'Medium',
      url: 'https://medium.com/@vaidshubhendu',
    },
  ],
};

export default data;
