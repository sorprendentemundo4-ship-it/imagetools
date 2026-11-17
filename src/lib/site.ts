import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { tools, categories } from '@/config/tools';
import { publicOrigin, canIndex } from './seo-policy';
import { validateCatalog } from './catalog';

validateCatalog(tools, categories);
export const siteUrl = publicOrigin(process.env.NEXT_PUBLIC_SITE_URL?.trim() || siteConfig.publicUrl);
export const indexingEnabled = canIndex(siteUrl, siteConfig.indexingEnabled, true);
export const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || siteConfig.contactEmail).trim();
export const toolPath = (slug: string) => '/herramientas/' + slug;

export const pages = [
  ...siteConfig.pages,
  ...tools.map(tool => ({ path: toolPath(tool.slug), title: tool.title, description: tool.description, readyToIndex: tool.readyToIndex })),
];
export const indexablePages = pages.filter(page => canIndex(siteUrl, siteConfig.indexingEnabled, page.readyToIndex));

export function metadataFor(path: string): Metadata {
  const page = pages.find(item => item.path === path);
  if (!page) throw new Error('Registra la página y su contenido antes de crear su metadata.');
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  return {
    title: page.title,
    description: page.description,
    robots: { index: canIndex(siteUrl, siteConfig.indexingEnabled, page.readyToIndex), follow: indexingEnabled },
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title: page.title, description: page.description,
      siteName: siteConfig.name, locale: siteConfig.locale, type: 'website',
      ...(url ? { url } : {}),
    },
  };
}
