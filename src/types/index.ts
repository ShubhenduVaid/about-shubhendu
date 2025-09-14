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

export interface Blog {
  title: string;
  description: string;
  link: string;
  date: string;
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
  blogs?: Blog[];
  contact: Contact;
  socials: Social[];
}
