import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const root = resolve('out');
const files = [];
async function collect(dir) {
  for (const entry of await readdir(dir, {withFileTypes:true})) {
    if (entry.name === '_next') continue;
    const path = resolve(dir,entry.name);
    if (entry.isDirectory()) await collect(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
await collect(root);
assert.ok(files.length >= 6, 'Exporta inicio, páginas informativas y 404.');
const home = await readFile(resolve(root,'index.html'),'utf8');
const enabled = /<meta name="robots" content="index, follow"/.test(home);
const canonical = home.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const origin = canonical ? new URL(canonical).origin : null;
const expectedUrls = [];
const titles = new Set();
for (const path of files) {
  const html = await readFile(path,'utf8');
  const name = relative(root,path).split(sep).join('/');
  // Google's ownership file is a plain-text HTML asset, not a content page.
  if (/^google[a-f0-9]+\.html$/.test(name)) {
    assert.equal(html.trim(), 'google-site-verification: '+name, 'Verificación de Google intacta.');
    assert.ok((await readFile(resolve('public',name))).equals(await readFile(path)), 'Verificación copiada sin cambios.');
    console.log('OK verificación Google /'+name);
    continue;
  }
  if (name === '404.html' || name === '_not-found.html') continue;
  const route = name === 'index.html' ? '/' : '/' + name.replace(/\.html$/, '');
  assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,'H1 único: '+route);
  assert.match(html, /<meta name="description" content="[^"]+"/);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title),'Título único: '+route); titles.add(title);
  const pageCanonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (origin) {
    assert.ok(pageCanonical, 'Canonical público: '+route);
    assert.equal(new URL(pageCanonical).origin,origin);
    assert.equal(new URL(pageCanonical).pathname,route);
  } else assert.equal(pageCanonical, undefined, 'No inventar dominios: '+route);
  if (!enabled) assert.match(html, /<meta name="robots" content="noindex, nofollow"/);
  if (!/content="noindex,/.test(html) && pageCanonical) expectedUrls.push(pageCanonical);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const link=match[1];
    const resource=/\.[a-z0-9]+$/i.test(link) ? link : link==='/' ? '/index.html' : link+'.html';
    assert.ok((await stat(resolve(root,'.'+resource))).isFile(),route+' → '+link);
  }
  const payloadDirectory=route==='/' ? root : resolve(root,'.'+route);
  const segment=route==='/' ? '__next.__PAGE__.txt' : '__next.'+(route.startsWith('/herramientas/') ? 'herramientas.$d$slug' : route.slice(1).replaceAll('/','.'))+'.__PAGE__.txt';
  assert.ok((await stat(resolve(payloadDirectory,segment))).isFile(),'Payload de navegación: '+route);
  console.log('OK export '+route);
}
const robots = await readFile(resolve(root,'robots.txt'),'utf8');
const sitemap = await readFile(resolve(root,'sitemap.xml'),'utf8');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.doesNotMatch(sitemap, /<lastmod>/,'No inventar fechas.');
if (enabled) {
  assert.match(robots,/Allow: \//);
  assert.ok(robots.includes('Sitemap: '+origin+'/sitemap.xml'));
  assert.deepEqual(locations.sort(),expectedUrls.sort());
} else {
  assert.match(robots,/Disallow: \//);
  assert.deepEqual(locations,[]);
}
assert.match(await readFile(resolve(root,'404.html'),'utf8'),/Página no encontrada/);
console.log('OK HTML, enlaces, CSS/JS, payloads, metadata, 404, robots y sitemap; indexación '+(enabled?'activada':'desactivada'));

