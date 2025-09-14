/**
 * Application constants
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '#about',
  EXPERIENCE: '#experience',
  BLOG: '#blog',
  CONTACT: '#contact',
} as const;

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shubhenduvaid',
  LINKEDIN: 'https://linkedin.com/in/shubhenduvaid',
  EMAIL: 'mailto:hello@shubhenduvaid.com',
} as const;

export const PERFORMANCE_THRESHOLDS = {
  RENDER_TIME_WARNING: 16, // ms
  BUNDLE_SIZE_WARNING: 250, // kb
} as const;
