/** @type {import('next').NextConfig} */
const BASE_PATH = '/amyet';

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: BASE_PATH,
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.amyet.com', pathname: '/cdn/shop/**' },
      { protocol: 'https', hostname: 'amyet.com', pathname: '/cdn/shop/**' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
};
module.exports = nextConfig;
