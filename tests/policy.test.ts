import test from 'node:test';
import assert from 'node:assert/strict';
import { publicOrigin, canIndex } from '../src/lib/seo-policy.ts';
import { siteConfig } from '../src/config/site.ts';

test('la plantilla empieza sin URL pública y sin indexación', () => {
  assert.equal(siteConfig.publicUrl, '');
  assert.equal(siteConfig.indexingEnabled, false);
  assert.equal(publicOrigin(siteConfig.publicUrl), null);
});
test('URL pública HTTPS válida y normalización del origen', () => {
  assert.equal(publicOrigin('https://mi-proyecto.pages.dev/'), 'https://mi-proyecto.pages.dev');
  assert.equal(publicOrigin(' https://herramientas.es '), 'https://herramientas.es');
});
for (const value of [
  undefined, '', 'texto', 'http://proyecto.es', 'https://localhost',
  'https://127.0.0.1', 'https://192.168.1.10', 'https://intranet',
  'https://proyecto.local', 'https://proyecto.test', 'https://proyecto.invalid',
  'https://proyecto.example', 'https://example.com', 'https://sub.example.org',
  'https://usuario:secreto@proyecto.es', 'https://proyecto.es/ruta',
  'https://proyecto.es?clave=valor', 'https://proyecto.es#seccion', 'https://proyecto.es:3000',
]) test('rechaza un origen no publicable: ' + String(value), () => assert.equal(publicOrigin(value), null));

test('indexar exige URL válida, activación explícita y revisión de la página', () => {
  const origin = publicOrigin('https://proyecto.es');
  assert.equal(canIndex(null, true, true), false);
  assert.equal(canIndex(origin, false, true), false);
  assert.equal(canIndex(origin, true, false), false);
  assert.equal(canIndex(origin, true, true), true);
});
