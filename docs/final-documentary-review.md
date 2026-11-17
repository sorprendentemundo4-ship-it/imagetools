# Cierre documental previo a solicitar autorización SEO

Este informe actualiza y prevalece sobre los listados de pendientes anteriores. No se han repetido las auditorías, ejecutado nuevas pruebas de aplicación, activado indexación ni realizado push. No se han cambiado herramientas, diseño ni otros proyectos.

## Comprobaciones aportadas por el titular

Se incorporan como comprobaciones comunicadas por el titular, no como observaciones independientes realizadas desde este entorno ni como garantías permanentes:

| Elemento | Resultado comunicado |
| --- | --- |
| URL pública | https://imagetools-3sd.pages.dev/ |
| Página principal | HTTP 200 |
| Sitemap | HTTP 200, application/xml |
| robots.txt | Disallow: /, intencionado |
| Cloudflare Web Analytics | Sin configurar |
| Cookies en Edge | Tabla vacía durante la comprobación |
| Solicitudes beacon | Ninguna detectada durante la comprobación |
| Search Console | Propiedad verificada |

Una respuesta HTTP 200 de sitemap no demuestra por sí sola sus entradas; el proyecto mantiene deliberadamente su sitemap sin URLs hasta autorizar la activación. No se extrapolan las observaciones a todos los navegadores, fechas, rutas ni servicios internos de Cloudflare. Las comprobaciones públicas dejan de figurar como una auditoría que el titular deba repetir ahora.

## Identidad y estado de configuración

Responsable ya identificado por el usuario: Oscar Virgili Serrano. Consta en `legal.responsibleName` de `src/config/site.ts`. No es necesario volver a solicitar el nombre ni deducirlo de Git. Correo confirmado: sorprendentemundo4@gmail.com. Proveedor confirmado: Gmail de Google. Política de consultas ordinarias aceptada: hasta 12 meses tras cierre, revisión mensual y eliminación de datos innecesarios antes.

El origen de configuración es https://imagetools-3sd.pages.dev. `indexingEnabled` permanece false. Las ocho páginas principales ya están preparadas en `artifacts/seo-launch-preview.json`, `artifacts/seo-launch/sitemap.xml` y `artifacts/seo-launch/robots.txt`. Son propuestas locales fuera de `public/` y `out/`, no una activación. Las páginas legales incompletas mantienen readyToIndex=false.

## Gmail de consumo: lo confirmado

La ayuda oficial de Google indica que Gmail de consumo se rige por sus condiciones y política de privacidad, no ofrece DPA y Google no actúa como encargado para esa modalidad. No se le atribuye un contrato Workspace ni un papel de encargado inexistente. Esto no basta para declarar ilícito todo uso de Gmail, pero tampoco para afirmar que cualquier tratamiento de datos de terceros queda cubierto. El responsable debe valorar el encaje del uso concreto o elegir una modalidad/proveedor con condiciones adecuadas.

Fuente: https://support.google.com/policies/answer/9581826?hl=en

Google publica conservación diferenciada por dato/finalidad, eliminación por el usuario, excepciones legales o de seguridad y procesos de borrado con demoras. Describe un proceso habitual de unos dos meses y copias de seguridad de hasta seis meses, sujetos a excepciones y retrasos: no son una promesa de borrado exacto ni un plazo específico garantizado para todos los mensajes de este buzón. No confundirlos con los 12 meses decididos por ImageTools. Vaciar la papelera no prueba la desaparición instantánea de toda copia del proveedor.

Fuente: https://policies.google.com/technologies/retention?hl=es

Google declara mecanismos de adecuación, DPF y cláusulas contractuales tipo según el supuesto. No se afirma residencia exclusiva en la UE ni que toda operación del buzón se base en un único mecanismo. Las garantías de transferencia no sustituyen la valoración del papel del proveedor.

Fuente: https://policies.google.com/privacy/frameworks?hl=es

## Cloudflare Pages: lo confirmado

El contrato público Self-Serve, sección 6.1, incorpora por referencia el DPA cuando procede el tratamiento de datos personales del cliente. No se exige inventar una firma separada ni contratar un plan de pago para documentar ese marco. Se documenta lo que dicen las condiciones públicas, sin afirmar una revisión del historial contractual privado de la cuenta.

Fuente: https://www.cloudflare.com/terms/

El DPA regula tratamiento por cuenta del cliente y medidas de seguridad; contempla DPF y cláusulas contractuales para transferencias según el supuesto, además de mecanismos de devolución/eliminación y excepciones aplicables. No equivale a una garantía de ausencia de incidentes, cero registros o tratamiento exclusivamente europeo.

Fuente: https://www.cloudflare.com/cloudflare-customer-dpa/

La política publica criterios de conservación ligados a finalidad, necesidad, sensibilidad, riesgos y obligaciones, no un plazo único de días para todos los registros de Pages. El alojamiento puede tratar IP y tráfico aunque Web Analytics esté sin configurar. No se presentan límites de cookies, DNS, métricas o logs de otros productos como si fueran plazos de este despliegue. Un criterio de conservación documentado puede ser válido cuando no sea posible concretar el plazo; no se deja un bloqueo artificial de exigir una cifra inventada al titular. Si se configura exportación propia de logs u otro producto, habrá que documentarlo específicamente.

Fuente: https://www.cloudflare.com/privacypolicy/

## Propuesta concreta para evidencias de derechos: pendiente de aceptación

Se propone para este MVP de bajo volumen y sin perfiles una conservación diferenciada:

1. Durante la tramitación: conservar solo lo necesario para identificar la solicitud, verificar identidad de forma proporcionada y responder. Evitar solicitar documentos de identidad por defecto.
2. Tras el cierre: suprimir documentos de identidad, adjuntos y copias innecesarias tan pronto dejen de ser necesarios. Conservar durante un máximo de 12 meses únicamente una evidencia mínima: referencia, identificador de contacto imprescindible, derecho solicitado, fechas, decisión y prueba necesaria de la respuesta. No guardar de forma automática el expediente íntegro.
3. Revisar mensualmente y suprimir la evidencia vencida. Este plazo es una propuesta organizativa revisable, no un mínimo legal ni una garantía de cubrir todos los plazos de responsabilidad.
4. Si existe una reclamación, requerimiento u obligación concreta: separar la información estrictamente necesaria, limitar acceso, documentar motivo y criterio de finalización, y conservar durante el tiempo legalmente aplicable a ese caso. No prolongar todos los expedientes por un riesgo genérico.
5. La tramitación responde al cumplimiento de obligaciones RGPD; cualquier conservación adicional debe ser necesaria, justificada y tener la base correspondiente. No se puede conservar innecesariamente el expediente por llamar a todo obligación legal.

Fuente sobre minimización, conservación, información y responsabilidad: https://www.boe.es/buscar/doc.php?id=DOUE-L-2016-80807

Esta propuesta no se ha incorporado como política vigente a la página de privacidad porque aún necesita aceptación. La política ordinaria de consultas ya aceptada no se modifica.

## Decisiones que quedan

- Aceptar o ajustar la propuesta de evidencia mínima de derechos.
- Resolver la modalidad del correo: conservar Gmail de consumo con una valoración documentada del encaje de ese uso concreto, o cambiar a un servicio con condiciones adecuadas. No basta con aceptar genéricamente un riesgo para dar por cumplida una obligación; tampoco se exige por defecto contratar un servicio de pago.
- Una vez reflejadas ambas decisiones en los textos, revisar el resultado y autorizar expresamente publicación y SEO. No es necesario repetir las auditorías técnicas ya superadas.

## Riesgos que el código no puede eliminar

No puede garantizar los tiempos internos, subencargados, cambios de condiciones, continuidad o localización de los proveedores, ni emitir una certificación jurídica de su elección. La supervisión de la política de borrado depende del titular. Una observación de cookies/beacons es limitada a la comprobación realizada. Noindex tampoco elimina obligaciones aplicables a una web accesible.

## Preparación para autorización

No hay un nuevo bloqueo técnico identificado. Los resultados anteriores de build, ESLint, TypeScript, 35 pruebas y exportación se conservan como comprobaciones previas, sin presentarlos como reejecutados. La revisión documental está preparada para la decisión del titular; no está completamente cerrada hasta resolver el correo y adoptar el criterio de evidencias. Después se podrá solicitar autorización expresa para publicar e indexar las ocho páginas principales, manteniendo noindex en las legales incompletas.
