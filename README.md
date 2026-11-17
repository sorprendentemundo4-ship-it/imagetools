# ImageTools

MVP estático con Next.js App Router, TypeScript estricto y Tailwind CSS. Seis herramientas locales: conversor, redimensionador, compresor, recorte, conversiones frecuentes y lienzos sociales. Sin cuentas, base de datos, APIs externas, analítica ni publicidad activa.

## Desarrollo y comprobaciones

Node.js >= 22.18. En PowerShell restringido utiliza npm.cmd.

```
npm.cmd ci
npm.cmd run dev
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run test:export
npm.cmd start
npm.cmd run test:smoke
node scripts/browser-check.mjs
```

La prueba de navegador necesita Microsoft Edge en su ruta habitual de Windows y el servidor estático en localhost:3002. Usa un perfil temporal aislado y Canvas real para comprobar conversiones entre los tres formatos, transparencia, fondo JPG, recorte, ajuste social, entradas inválidas, límites y anchos móvil/escritorio.

## Arquitectura

- src/config: catálogo, contenidos, identidad y política de publicación.
- src/lib/image-math.ts: geometría y límites puros.
- src/lib/image-engine.ts: validación, decodificación orientada y exportación Canvas.
- src/components/image-editor.tsx: editor compartido con controles específicos por herramienta y limpieza de recursos.
- src/app/herramientas/[slug]: seis páginas prerenderizadas con metadata individual y contenido útil.
- scripts/normalize-export.mjs: compatibilidad de payloads de navegación de esta versión de Next.js en Windows.

## Límites y privacidad

Entrada estática JPG, PNG y WebP: 30 MB, 32 MP y 16384 px por lado. Salida: 24 MP y 8192 px por lado. Las animaciones PNG/WebP se rechazan. HEIC, GIF y SVG no se admiten. Un dispositivo con poca memoria puede fallar antes de estos límites; se muestra un error. La decodificación inicial depende de los límites del navegador. La orientación EXIF se aplica mediante createImageBitmap. Canvas elimina metadatos y no garantiza conservar perfiles de color. JPG aplana sobre blanco. Las URLs temporales y bitmaps se liberan al sustituir archivos, reiniciar y desmontar el editor. No se envían los archivos a la red.

## Publicación en Cloudflare Pages

Dominio definitivo: https://imagetools-3sd.pages.dev/. Build: npm run build. Directorio: out. No necesita servidor Node en producción.

La activación SEO ha sido autorizada el 17/11/2026 y está aplicada en el código local: ocho páginas principales con index,follow, canonical absolutos, sitemap de ocho URLs y robots permitiendo rastreo. Contacto, privacidad y aviso legal mantienen noindex,follow por decisión editorial. Que el código esté preparado no confirma que el commit, push o despliegue hayan terminado: consultar docs/release-status.md.

El responsable, correo y decisiones de conservación confirmados se configuran en src/config/site.ts. NEXT_PUBLIC_SITE_URL y NEXT_PUBLIC_CONTACT_EMAIL pueden sobrescribir sus valores durante el build; deben coincidir con el dominio y contacto definitivos. No se afirma cumplimiento legal certificado ni se atribuye un DPA a Gmail de consumo.

Antes de incorporar AdSense o cambiar de proveedor, revisar privacidad, actividad e información legal y consentimiento aplicables. Quedan como comprobaciones adicionales Safari, Firefox y dispositivos físicos con poca memoria; los presets sociales son lienzos habituales, no requisitos oficiales garantizados.

Los espacios AdSlot están vacíos y no cargan scripts. La monetización futura requiere revisar privacidad y consentimiento antes de integrar proveedores.
