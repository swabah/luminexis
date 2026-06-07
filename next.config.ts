import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* ─── Performance ─── */
  reactStrictMode: true,
  poweredByHeader: false,

  /* ─── Images ─── */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add remote image domains here, e.g.:
      // { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  /* ─── Headers ─── */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
