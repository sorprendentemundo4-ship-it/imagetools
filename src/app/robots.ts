import type { MetadataRoute } from 'next';
import { indexingEnabled, siteUrl } from '@/lib/site';
import { robotsPolicy } from '@/lib/seo-policy';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots {
  return robotsPolicy(siteUrl, indexingEnabled);
}
