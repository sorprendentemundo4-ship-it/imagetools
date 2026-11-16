import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { indexingEnabled, siteUrl } from '@/lib/site';
import { Header, Footer } from '@/components/shell';
import './globals.css';

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: siteConfig.name, template: '%s | ' + siteConfig.name },
  description: siteConfig.description,
  robots: { index: indexingEnabled, follow: indexingEnabled },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = {
    '--primary': siteConfig.colors.primary,
    '--primary-hover': siteConfig.colors.primaryHover,
    '--surface': siteConfig.colors.surface,
    '--ink': siteConfig.colors.text,
  } as CSSProperties;
  return <html lang={siteConfig.language}>
    <body style={theme}>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Header /><main id="contenido">{children}</main><Footer />
    </body>
  </html>;
}
