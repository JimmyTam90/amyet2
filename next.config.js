/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
