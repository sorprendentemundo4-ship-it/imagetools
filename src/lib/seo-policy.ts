// Pure helpers: no framework or runtime server dependency.
export function publicOrigin(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    const host = url.hostname.toLowerCase();
    if (url.protocol !== 'https:' || url.username || url.password || url.port ||
        url.pathname !== '/' || url.search || url.hash) return null;
    if (!host.includes('.') || host.includes(':') || /^\d+(\.\d+){3}$/.test(host)) return null;
    if (['localhost', 'local', 'test', 'example', 'invalid'].some(s => host === s || host.endsWith('.' + s))) return null;
    if (['example.com', 'example.net', 'example.org'].some(s => host === s || host.endsWith('.' + s))) return null;
    return url.origin;
  } catch { return null; }
}
export function canIndex(origin: string | null, enabled: boolean, reviewed: boolean): boolean {
  return origin !== null && enabled && reviewed;
}

export function sitemapUrls(origin: string | null, enabled: boolean, pages: readonly { path: string; readyToIndex: boolean }[]): string[] {
  if (!origin || !enabled) return [];
  return pages.filter(page => page.readyToIndex).map(page => new URL(page.path, origin).href);
}

export function robotsPolicy(origin: string | null, enabled: boolean) {
  return origin && enabled
    ? { rules: { userAgent: '*', allow: '/' }, sitemap: origin + '/sitemap.xml' }
    : { rules: { userAgent: '*', disallow: '/' } };
}
