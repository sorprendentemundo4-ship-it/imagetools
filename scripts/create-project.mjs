import { cp, mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { resolve, relative, isAbsolute, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('../',import.meta.url));
const option = key => {
  const index = process.argv.indexOf(key);
  return index >= 0 ? process.argv[index+1] : undefined;
};
const requested = option('--destination');
const name = option('--name');
if (!requested || !name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name))
  throw new Error('Uso: npm run create -- --destination <carpeta-nueva> --name <nombre-en-minusculas>');
const target = resolve(requested);
const inside = (parent,child) => {
  const path=relative(parent,child);
  return !path || (!path.startsWith('..') && !isAbsolute(path));
};
if (inside(source,target) || inside(target,source)) throw new Error('El destino debe ser independiente y no puede contener la plantilla.');
try {
  await stat(target);
  throw new Error('El destino ya existe. Elige una carpeta nueva para no sobrescribir archivos.');
} catch(error) { if(error.code!=='ENOENT') throw error; }
await stat(dirname(target));
// Explicit allowlist: no .git, caches, generated files, local env, verification or credentials.
const paths = [
  'src','public','scripts','tests','scaffolds','package.json','package-lock.json',
  'next.config.ts','tsconfig.json','eslint.config.mjs','AGENTS.md','README.md','.gitignore','.env.example',
];
await mkdir(target);
for (const path of paths) await cp(resolve(source,path),resolve(target,path),{
  recursive:true,
  filter: entry => {
    const file=basename(entry);
    return !(file.startsWith('.env') && file!=='.env.example') &&
      !/^google.*\.html$/i.test(file) && !/\.(pem|key|p12|pfx)$/i.test(file) &&
      !['.git','node_modules','.next','out','artifacts','.aws'].includes(file);
  },
});
for (const file of ['package.json','package-lock.json']) {
  const path=resolve(target,file);
  const data=JSON.parse(await readFile(path,'utf8'));
  data.name=name;
  if(data.packages?.['']) data.packages[''].name=name;
  await writeFile(path,JSON.stringify(data,null,2)+'\n');
}
console.log('Proyecto independiente creado en '+target);
console.log('Siguiente paso: configura src/config/site.ts y ejecuta npm ci.');
