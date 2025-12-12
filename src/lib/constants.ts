/**
 * Application constants
 */
export const ROUTES = {
  HOME: '/',
  ABOUT: '#section-about',
  EXPERIENCE: '#section-experience',
  BLOG: '#section-articles',
  CONTACT: '#section-contact',
} as const;

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ShubhenduVaid',
  LINKEDIN: 'https://linkedin.com/in/shubhendu-vaid',
  EMAIL: 'mailto:vaidshubhendu@gmail.com',
} as const;

export const PERFORMANCE_THRESHOLDS = {
  RENDER_TIME_WARNING: 16, // ms
  BUNDLE_SIZE_WARNING: 250, // kb
} as const;
