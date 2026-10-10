import type { MetadataRoute } from 'next';
import { absUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/privacy', '/terms', '/affiliate-disclosure', '/contact'].map((p) => ({
    url: absUrl(p),
    changeFrequency: 'monthly',
    priority: p === '' ? 1 : 0.3,
  }));
}
