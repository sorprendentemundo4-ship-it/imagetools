import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL || 'http://localhost:3002';
for (const path of ['/', '/acerca-de', '/contacto', '/privacidad', '/aviso-legal', '/robots.txt', '/sitemap.xml']) {
  const response = await fetch(base+path);
  assert.equal(response.status,200,path);
  if (path!=='/robots.txt' && path!=='/sitemap.xml') assert.match(await response.text(),/<h1[ >]/);
  console.log('OK HTTP '+path);
}
assert.equal((await fetch(base+'/ruta-inexistente')).status,404);
console.log('OK HTTP 404');
