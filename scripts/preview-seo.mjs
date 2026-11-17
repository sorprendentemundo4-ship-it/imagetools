// Review-only artifact: never writes to public/, out/ or the SEO configuration.
import { mkdir, writeFile } from 'node:fs/promises';
import { siteConfig } from '../src/config/site.ts';
import { tools } from '../src/config/tools.ts';
import { publicOrigin, sitemapUrls, robotsPolicy } from '../src/lib/seo-policy.ts';
const origin=publicOrigin(siteConfig.publicUrl);
if(!origin)throw new Error('Configura primero el origen público real.');
const pages=[...siteConfig.pages,...tools.map(tool=>({path:'/herramientas/'+tool.slug,readyToIndex:tool.readyToIndex}))];
const urls=sitemapUrls(origin,true,pages);
const robots=robotsPolicy(origin,true);
const preview={
 reviewOnly:true,
 currentIndexingEnabled:siteConfig.indexingEnabled,
 activationRequiresExplicitAuthorization:true,
 origin,
 proposedSitemap:'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+urls.map(url=>'  <url><loc>'+url+'</loc></url>').join('\n')+'\n</urlset>\n',
 proposedRobots:robots,
 pages:pages.map(page=>({path:page.path,canonical:new URL(page.path,origin).href,proposedRobots:page.readyToIndex?'index,follow':'noindex,follow'})),
};
await mkdir('artifacts',{recursive:true});
await writeFile('artifacts/seo-launch-preview.json',JSON.stringify(preview,null,2)+'\n');
await mkdir('artifacts/seo-launch',{recursive:true});
await writeFile('artifacts/seo-launch/sitemap.xml',preview.proposedSitemap);
await writeFile('artifacts/seo-launch/robots.txt','User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
console.log('Vista previa de revisión: artifacts/seo-launch-preview.json ('+urls.length+' URLs). No se ha activado la indexación.');
