/**
 * Application configuration
 */
export const config = {
  app: {
    name: 'Shubhendu Vaid Portfolio',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.shubhenduvaid.com',
    env: process.env.NODE_ENV || 'development',
  },
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
  },
  features: {
    errorReporting: process.env.NODE_ENV === 'production',
    performanceMonitoring: true,
  },
} as const;
