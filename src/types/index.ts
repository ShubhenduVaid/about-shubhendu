export interface Contact {
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  twitter?: string;
  website?: string;
}

export interface About {
  headline: string;
  contents: string[];
}

export interface Experience {
  title: string;
  location: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  client: string;
  period: string;
  description: string;
  technologies?: string[];
  link?: string;
  github?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export type StatIcon = 'award' | 'users' | 'code' | 'map-pin';

export interface StatItem {
  icon: StatIcon;
  value: string;
  label: string;
  description: string;
}

export type Achievement = string;

export interface AdvisoryService {
  title: string;
  items: string[];
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
  readTime: string;
  category: string;
  link: string;
  image: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  period: string;
  summary: string;
}

export interface Education {
  degree: string;
  year: number;
  institution?: string;
  location: string;
}

export interface Social {
  platform: string;
  url: string;
  icon?: string;
}

export interface PersonalData {
  name: string;
  title: string;
  location: string;
  description: string;
  about: About;
  experiences: Experience[];
  skills: string[];
  education: Education[];
  projects: Project[];
  contact: Contact;
  socials: Social[];
}
