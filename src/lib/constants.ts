/**
 * Application-wide constants.
 */
export const SITE_CONFIG = {
  name: 'Luminexis',
  description: 'Building the future, one pixel at a time.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://luminexis.com',
  locale: 'en_US',
  themeColor: '#0a0a0a',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
