import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://primegearlab.com';
  return ['', '/privacy', '/terms', '/affiliate-disclosure', '/contact'].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.3,
  }));
}
