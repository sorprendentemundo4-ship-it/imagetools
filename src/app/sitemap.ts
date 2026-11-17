import type { MetadataRoute } from 'next';
import { indexingEnabled, pages, siteUrl } from '@/lib/site';
import { sitemapUrls } from '@/lib/seo-policy';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapUrls(siteUrl, indexingEnabled, pages).map(url => ({ url }));
}
