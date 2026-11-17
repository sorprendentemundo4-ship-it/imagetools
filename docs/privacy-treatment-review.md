# Cierre de tratamientos y bloqueos concretos

## Hechos registrados

El titular informa de que el panel muestra “Get started with Web Analytics”, no ha completado la configuración y no quiere activarla. Se registra Web Analytics no configurado según esa comprobación. No se ha accedido a su cuenta ni cambiado opciones de Cloudflare. Esto no acredita ausencia de registros de infraestructura.

El nombre Oscar Virgili Serrano ya fue facilitado por el titular y está incorporado a `legal.responsibleName` en `src/config/site.ts`. Se le ha pedido que lo complete o confirme directamente; no hay otro nombre deducido de Git/GitHub. El correo público, Gmail de Google y los 12 meses de consultas están confirmados. Las páginas siguen pendientes de revisión de proveedores, no de inventar más identidad.

## Bases jurídicas revisadas

- Consultas: art. 6.1.f RGPD. Finalidad concreta: responder comunicaciones voluntarias y resolver incidencias. Necesidad: dirección de respuesta y contenido relevante; no pedir imágenes ni categorías especiales. Expectativa razonable: quien escribe a contacto espera respuesta, no marketing. Salvaguardas: minimización, sin perfiles, canal de oposición y borrado revisado mensualmente. El titular debe mantener la práctica real y revisar el equilibrio si cambia el uso. La valoración no corrige por sí sola un proveedor inadecuado.
- Funcionamiento/seguridad: art. 6.1.f. Interés: servir y proteger la web. Se necesita parte de los datos de conexión para entregarla y gestionar abusos. Limitar la finalidad; la analítica de audiencia no queda incluida automáticamente. Evaluación provisional mientras se verifican las condiciones específicas de Cloudflare. No se ha añadido logging propio ni se afirma que Cloudflare carezca de registros.
- Derechos: art. 6.1.c junto con arts. 12–22 RGPD. Datos mínimos para tramitar y acreditar atención; verificación adicional solo proporcionada. Expediente separado del correo ordinario, revisión y conservación de evidencia según responsabilidades concretas. No extender automáticamente el plazo ordinario de 12 meses. Atención general en un mes y prórrogas solo cuando procedan y se comuniquen.

Esta es la valoración para el uso descrito, sin marketing ni datos especiales. No sustituye la responsabilidad del titular de comprobar medios y prácticas reales.

Fuente: https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807

## Bloqueos de cierre previos a publicar

1. Buzón: cerrar su encaje contractual y papel del proveedor para recibir consultas y solicitudes de terceros. Google indica que no ofrece DPA para Gmail de consumo. No basta con llamar a Google encargado ni con enlazar su política. Si actúa como encargado en el tratamiento concreto, se necesita un marco adecuado conforme al art. 28. Debe resolverse la modalidad del servicio o justificarse jurídicamente la configuración, sin imponer por defecto un servicio de pago ni contratar nada desde este proyecto.
   Fuente oficial: https://support.google.com/policies/answer/9581826?hl=en
2. Alojamiento: comprobar la aplicación a la cuenta y servicios de las condiciones de tratamiento de Cloudflare, criterios reales de conservación de registros y garantías de transferencias. El DPA público se aplica cuando Cloudflare trata por cuenta del cliente, pero no demuestra por sí solo qué ajustes y contratos están vigentes en esta cuenta. No pedir un plazo inventado al titular: se debe obtener del servicio/proveedor o documentar criterios válidos.
   Fuentes: https://www.cloudflare.com/cloudflare-customer-dpa/ y https://www.cloudflare.com/privacypolicy/
3. Evidencia de solicitudes de derechos: determinar y documentar conservación necesaria para acreditar su atención según las responsabilidades aplicables; sin inventar un plazo universal. Preparar registro mínimo y revisión de borrado. Los derechos no pueden quedar abiertos sin atención porque se revise el buzón solo una vez al mes.
4. Comprobación pública: revisar scripts, cookies, encabezados y respuestas del despliegue; el análisis de código o el panel de Web Analytics no certifica por sí solo toda la capa de alojamiento. El entorno sigue sin acceso fiable a pages.dev; esto no implica caída del sitio.
5. Decisión del titular: autorización expresa para publicar/activar. No hay push ni activación autorizados en este turno.

## Lo que no se convierte en bloqueo automático

El contexto declarado no muestra ingresos, publicidad, afiliación o promoción profesional. No se exige NIF, domicilio o empresa solo por tener este MVP; si cambia la actividad, se revisará la LSSI y las obligaciones de AdSense y fiscales. Tampoco se exige indexar las páginas legales, una CMP sin tecnologías que la requieran, ni contratar un abogado como requisito universal.

Fuente de ámbito: https://lssi.digital.gob.es/lssi/la-ley/preguntas-frecuentes

## SEO

Las ocho rutas principales siguen preparadas en la vista previa generada por `scripts/preview-seo.mjs`, con canonical en https://imagetools-3sd.pages.dev. La configuración real sigue en false: noindex,nofollow y rastreo bloqueado. Las páginas legales permanecen excluidas del sitemap futuro hasta completarse. No se ha realizado push ni despliegue.

## Actualización posterior: cierre documental

Los resultados públicos aportados por el titular y la revisión focalizada de condiciones se recogen en `docs/final-documentary-review.md`, que sustituye este listado histórico de bloqueos. No se mantiene como pendiente repetir la inspección pública ya comunicada ni exigir un plazo numérico universal para todos los logs de Cloudflare. Correo y propuesta de conservación de evidencias siguen sujetos a las decisiones concretas del nuevo informe. Noindex y ausencia de push permanecen.
