# Preparación legal de ImageTools

Revisión del código local y fuentes oficiales el 16/11/2026. No equivale a certificar la configuración de producción ni la situación profesional o fiscal del titular.

## Hallazgos técnicos

- El editor utiliza File, createImageBitmap, Canvas, Blob y URLs locales. No hay llamadas para enviar archivos, nombres o resultados a servidores.
- No se ha encontrado código propio que añada cookies, almacenamiento persistente, analítica, publicidad, píxeles, iframes o beacons. AdSlot solo genera un div vacío.
- El archivo de Search Console es texto estático y no carga JavaScript.
- Cloudflare Pages es el alojamiento confirmado por el titular. Sus ajustes de medición, seguridad, cookies y registros no se pueden certificar desde el repositorio. Cloudflare permite activar Web Analytics e inyectar un script sin modificar las fuentes.
- No se han encontrado identidades, NIF, direcciones o correos ficticios en las páginas legales. Los datos desconocidos siguen marcados PENDIENTE; no se ha reutilizado la identidad de Git ni se ha deducido el titular a partir del usuario de GitHub.
- No se ha activado indexación, configurado proveedores de publicidad ni modificado otro proyecto.

## Obligaciones y condiciones

La LSSI atiende al carácter económico de la actividad, no solo a que el visitante pague. Una web puramente particular sin actividad económica no queda automáticamente incluida por estar en Internet. La publicidad o promoción profesional pueden cambiar la conclusión. El plan de monetización debe analizarse con la actividad real, sin afirmar una exención ni imponerla por defecto.

Si aplica la LSSI, el artículo 10 exige identificación del prestador: nombre o razón social, domicilio o establecimiento válido, email y comunicación efectiva, y NIF. Registro, autorización y datos de profesión regulada solo cuando correspondan. Un nombre comercial no sustituye al titular. No exige universalmente teléfono ni tres páginas con nombres concretos: la información debe ser accesible, directa y permanente.

Cuando se traten datos personales, debe existir base jurídica y facilitarse la información de los artículos 13/14 RGPD que corresponda: responsable, fines, legitimación, destinatarios, transferencias, conservación, derechos y reclamación, entre otros extremos condicionados. Los mensajes y los registros técnicos requieren análisis separado de las imágenes locales. No se debe elegir consentimiento o interés legítimo por rellenar una plantilla.

Sin cookies ni tecnologías sujetas a consentimiento no hay que añadir un banner por el mero hecho de tener una web. Las tecnologías estrictamente necesarias tienen excepciones; las de publicidad o seguimiento deben evaluarse antes de introducirlas. El resultado depende también del alojamiento real.

## Información mínima a confirmar

1. Titular: persona física o entidad; nombre completo o razón social; actividad actual (personal sin actividad económica, profesional o empresarial), publicidad, afiliación, patrocinio o promoción de otros servicios si existen.
2. Domicilio completo válido para identificar al prestador. NIF si aplica la LSSI. Datos de registro/autorización/colegiación solo si corresponden. No se necesita copia del documento de identidad.
3. Correo público efectivo que se quiera utilizar también para solicitudes de derechos y proveedor del buzón.
4. Uso de los mensajes: únicamente atender consultas o también otras finalidades; criterio real de borrado/conservación y accesos o servicios externos usados para gestionarlos. Si no está decidido, debe acordarse una práctica antes de anunciar un plazo.
5. Confirmar los ajustes activos de Cloudflare: Web Analytics/medición/RUM, servicios de seguridad o retos y registros/exportaciones. Confirmar si hay algún otro proveedor. No facilitar contraseñas ni tokens: bastan los nombres de servicios y sus opciones activas.

A partir de esas respuestas se revisarán las condiciones de proveedores, sus papeles, conservación y transferencias; no es necesario que el titular formule por su cuenta una base jurídica o conozca todos los plazos del proveedor.

## Recomendaciones, sin presentarlas como requisitos universales

Revisión profesional del caso si hay dudas sobre actividad económica, domicilio publicable o tratamientos; decidir licencias del código y contenidos; repetir la inspección de cookies/red en producción. No se exige contratar un abogado, CMP o delegado de protección de datos como requisito genérico de este MVP. La necesidad de un DPD depende de los supuestos legales específicos.

## SEO y publicación

indexingEnabled permanece en false. Noindex no suspende obligaciones legales de una web ya accesible. La verificación de Search Console tampoco acredita cumplimiento legal ni activa la indexación. Completar las páginas legales es un criterio de preparación del proyecto; no existe una obligación general de indexar estas páginas para indexar las herramientas.

Antes de publicar se deben sustituir los pendientes por datos y prácticas reales, revisar la salida estática y confirmar el comportamiento público. La activación de SEO requiere una decisión posterior del titular. Este trabajo no incluye commit, push ni despliegue.

## Fuentes

- LSSI, artículos 10 y 22 y anexo: https://www.boe.es/buscar/act.php?id=BOE-A-2002-13758
- Interpretación oficial del ámbito económico: https://lssi.digital.gob.es/lssi/la-ley/preguntas-frecuentes
- RGPD, artículos 13, 14 y 37: https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807
- AEPD, Guía sobre el uso de las cookies: https://www.aepd.es/guias/guia-cookies.pdf
- Cloudflare Pages Web Analytics: https://developers.cloudflare.com/pages/how-to/web-analytics/
