import test from 'node:test';
import assert from 'node:assert/strict';
import { sitemapUrls, robotsPolicy, canIndex, publicOrigin } from '../src/lib/seo-policy.ts';
import { siteConfig } from '../src/config/site.ts';
import { tools } from '../src/config/tools.ts';
const origin=publicOrigin(siteConfig.publicUrl);
const pages=[...siteConfig.pages,...tools.map(t=>({path:'/herramientas/'+t.slug,readyToIndex:t.readyToIndex}))];
test('el interruptor desactivado mantiene el bloqueo preventivo',()=>{
 assert.deepEqual(sitemapUrls(origin,false,pages),[]);
 assert.deepEqual(robotsPolicy(origin,false),{rules:{userAgent:'*',disallow:'/'}});
});
test('la configuración autorizada permite exactamente las ocho páginas completas',()=>{
 assert.equal(siteConfig.indexingEnabled,true);
 const expected=['/','/acerca-de','/herramientas/convertir-imagenes','/herramientas/redimensionar-imagenes','/herramientas/comprimir-imagenes','/herramientas/recortar-imagenes','/herramientas/cambiar-formato','/herramientas/tamanos-redes-sociales'];
 assert.deepEqual(sitemapUrls(origin,siteConfig.indexingEnabled,pages),expected.map(path=>new URL(path,origin!).href));
 assert.deepEqual(robotsPolicy(origin,true),{rules:{userAgent:'*',allow:'/'},sitemap:origin+'/sitemap.xml'});
 for(const page of pages)assert.equal(canIndex(origin,true,page.readyToIndex),expected.includes(page.path));
});
test('sin dominio válido no hay sitemap ni rastreo aunque se solicite activar',()=>{
 assert.deepEqual(sitemapUrls(null,true,pages),[]);
 assert.deepEqual(robotsPolicy(null,true),{rules:{userAgent:'*',disallow:'/'}});
});
