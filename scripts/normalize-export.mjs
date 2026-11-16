import { copyFile, readFile, readdir } from 'node:fs/promises';
import { dirname, join, relative, resolve, sep } from 'node:path';

// Next 16.4.6's exporter uses path.relative() (backslashes on Windows), but
// convertSegmentPathToStaticExportFilename() replaces only forward slashes.
// Copy the resulting nested segment files to the flat names the router requests.
// Linux exports already have flat names, so this is a no-op there.
const root = resolve('out');
let copied = 0;
async function flatten(directory, prefix = directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = join(directory, entry.name);
    if (entry.isDirectory()) { await flatten(source, prefix); continue; }
    if (!entry.isFile() || !entry.name.endsWith('.txt')) continue;
    const suffix = relative(prefix, source).split(sep).join('.');
    const destination = join(dirname(prefix), `${prefix.split(sep).at(-1)}.${suffix}`);
    try {
      const existing = await readFile(destination);
      if (!existing.equals(await readFile(source))) throw new Error(`Payload de navegación en conflicto: ${destination}`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await copyFile(source, destination);
      copied++;
    }
  }
}
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === '_next') continue;
    const path = join(directory, entry.name);
    if (entry.name.startsWith('__next.')) await flatten(path);
    else await visit(path);
  }
}
await visit(root);
console.log(`Exportación lista: ${copied} payloads de navegación normalizados.`);
