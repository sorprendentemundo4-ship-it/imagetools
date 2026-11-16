import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, relative, isAbsolute } from 'node:path';

// Local preview only. Cloudflare Pages serves out/ directly without this script.
const root = resolve('out');
const portIndex = process.argv.indexOf('--port');
const port = Number(portIndex >= 0 ? process.argv[portIndex + 1] : process.env.PORT || 3002);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Puerto no válido.');
await stat(resolve(root, 'index.html'));
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.png': 'image/png',
  '.woff2': 'font/woff2',
};
async function file(path) {
  try { return (await stat(path)).isFile() ? path : null; }
  catch (error) { if (['ENOENT', 'ENOTDIR'].includes(error.code)) return null; throw error; }
}
createServer(async (request, response) => {
  try {
    if (!['GET','HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const target = resolve(root, `.${pathname}`);
    const local = relative(root, target);
    if (local.startsWith('..') || isAbsolute(local)) { response.writeHead(403); response.end(); return; }
    const found = await file(target) || await file(`${target}.html`) || await file(resolve(target, 'index.html'));
    const body = await readFile(found || resolve(root, '404.html'));
    response.writeHead(found ? 200 : 404, { 'Content-Type': types[extname(found || '404.html')] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    const invalid = error instanceof URIError;
    response.writeHead(invalid ? 400 : 500);
    response.end(invalid ? 'Solicitud no válida' : 'No se pudo servir la exportación estática.');
    if (!invalid) console.error(error);
  }
}).listen(port, '127.0.0.1', () => console.log(`Exportación estática local: http://localhost:${port} (out/)`));
