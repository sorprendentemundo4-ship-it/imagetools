import type { MetadataRoute } from 'next';
import { indexingEnabled, siteUrl } from '@/lib/site';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return indexingEnabled && siteUrl
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: siteUrl + '/sitemap.xml' }
    : { rules: { userAgent: '*', disallow: '/' } };
}
