# Revisión previa al lanzamiento de ImageTools

Estado: proyecto personal gratuito gestionado desde España, sin ingresos, publicidad ni afiliación según lo confirmado por su gestor. La futura publicidad todavía no está activa. Search Console está verificado según lo comunicado por el titular. No se ha activado indexación ni hecho push.

## Correo público

Introducir el correo exclusivo para proyectos en `contactEmail` de `src/config/site.ts`. Alternativamente, definir `NEXT_PUBLIC_CONTACT_EMAIL` en el entorno de compilación de producción de Cloudflare. La variable tiene prioridad si no está vacía. Es un dato que se publicará en el HTML; no es una contraseña.

El componente PublicContact comparte el mismo correo entre contacto, privacidad y aviso legal, y mantiene un aviso PENDIENTE si falta o no tiene un formato válido. No se ha inventado ninguna dirección. Cambiar el correo requiere recompilar.

## Preparación SEO

Origen confirmado por el usuario: https://imagetools-3sd.pages.dev. `NEXT_PUBLIC_SITE_URL`, si existe, debe contener ese mismo origen; una variable vacía utiliza el origen de la configuración. Si se desea un dominio propio, decidirlo antes de lanzar.

El interruptor `indexingEnabled` sigue en false. El build actual mantiene noindex,nofollow, robots Disallow: / y sitemap sin URLs. Los canonical ya apuntan al origen público.

Ejecutar `node --experimental-strip-types scripts/preview-seo.mjs` para revisar `artifacts/seo-launch-preview.json`. Este script genera únicamente un artefacto local ignorado por Git, no modifica `public/`, `out/` ni el interruptor. Contiene el sitemap futuro con ocho URLs, robots permitiendo rastreo e index,follow propuesto para:

- Inicio y acerca-de.
- Conversor, redimensionador, compresor, recorte, conversiones frecuentes y tamaños sociales.

Contacto, privacidad y aviso legal mantienen readyToIndex=false. Con una autorización posterior, al activar el interruptor global estas páginas seguirán con noindex,follow y fuera del sitemap. Tener un correo no aprueba automáticamente las páginas legales.

## Cloudflare: comprobar Web Analytics

1. Entrar en el panel de Cloudflare y abrir Workers & Pages.
2. Seleccionar el proyecto de ImageTools, verificando el dominio pages.dev.
3. Abrir Metrics y localizar Web Analytics. Revisar el estado; no pulsar Enable para comprobarlo. La documentación indica que esa acción activa la inyección del script en el siguiente despliegue.
4. Si figura activo, confirmar si se quiere conservar y documentar la medición o desactivarla. Informar del resultado antes de cerrar los textos legales.

Fuente: https://developers.cloudflare.com/pages/how-to/web-analytics/

## Comprobar scripts y cookies en producción

En una ventana privada y sin extensiones, abrir la web y las herramientas de desarrollo. En Network, activar Preserve log y recargar; revisar las peticiones y sus iniciadores. Buscar `beacon.min.js`, `static.cloudflareinsights.com`, `/cdn-cgi/rum`, Google Analytics, Tag Manager, AdSense y cualquier dominio inesperado. Los nombres son pistas, no un inventario exhaustivo ni una prueba de ausencia por sí solos.

En Application/Storage revisar cookies, localStorage y sessionStorage; en Network revisar Set-Cookie en las respuestas. Inspeccionar también la portada, una herramienta al abrir/procesar una imagen y las páginas informativas. Un archivo de prueba no sensible permite comprobar que no se envía su contenido. Las peticiones normales de HTML, scripts y navegación de Next no son subidas de imágenes.

El código revisado no añade medición, publicidad, almacenamiento persistente ni llamadas de subida. No se ha podido auditar la configuración de la cuenta ni confirmar las respuestas públicas desde este entorno. Una ausencia de cookies no demuestra por sí sola ausencia de medición: puede haber métricas sin cookies o registros de servidor.

## Proveedores y decisiones pendientes

- Cloudflare Pages: alojamiento confirmado; recibe tráfico y puede tratar datos técnicos de visitantes. Confirmar opciones activas, registros/exportaciones y revisar condiciones, conservación y transferencias del servicio concreto. No afirmar que no recopila datos. Política: https://www.cloudflare.com/privacypolicy/
- GitHub: repositorio y código para despliegue. No es un servicio de procesamiento de las imágenes del editor.
- Google Search Console: verificación y gestión de presencia en búsqueda. El archivo de verificación es estático y no añade un tracker.
- Proveedor del correo: pendiente de que el gestor lo indique.

Falta aportar el correo y su proveedor, identificar por nombre y apellidos al responsable de los tratamientos que correspondan, y concretar la gestión/conservación de consultas. No se deduce la identidad desde Git o GitHub.

Domicilio, NIF y datos registrales no se inventan. Se debe decidir la aplicación de la LSSI atendiendo a la actividad real; la ausencia de cobro no es una exención universal. Si entra en su ámbito, incorporar la identificación exigible; registro y profesión regulada solo cuando correspondan. Antes de monetizar, repetir esta revisión y la de publicidad/consentimiento. Fuente oficial: https://lssi.digital.gob.es/lssi/la-ley/preguntas-frecuentes

No se afirma cumplimiento completo. La revisión profesional en caso de duda es una recomendación. No se exige añadir un banner sin tecnologías que lo requieran. Noindex no suspende las obligaciones aplicables a una web accesible.

## Publicación posterior

Revisar los datos, cerrar los textos, confirmar las opciones de Cloudflare y decidir qué páginas están completas. Solo después de autorización expresa se podrá activar indexingEnabled, crear commit, hacer push y publicar. Un push a main puede activar automáticamente el despliegue: no debe usarse como simple copia de seguridad de un lanzamiento no autorizado.
