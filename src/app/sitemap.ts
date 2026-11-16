import type { MetadataRoute } from 'next';
import { indexablePages, siteUrl } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteUrl;
  if (!origin) return [];
  return indexablePages.map(page => ({ url: new URL(page.path, origin).href }));
}
