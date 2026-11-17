import { metadataFor } from '@/lib/site';
import { PublicContact } from '@/components/public-contact';
import { siteConfig } from '@/config/site';

export const metadata = metadataFor('/privacidad');

export default function Privacy() {
  return <article className="container prose section">
    <h1>Privacidad</h1>
    <p>Responsable: {siteConfig.legal.responsibleName}, persona física residente en España. Contacto y solicitudes de privacidad: <PublicContact />.</p>
    <p>ImageTools es un proyecto personal gratuito, actualmente sin ingresos, publicidad, afiliación ni patrocinios. Esta información describe los medios y las decisiones del proyecto; no constituye una certificación de cumplimiento legal.</p>

    <h2>Tus imágenes se procesan localmente</h2>
    <p>Al seleccionar una imagen, el editor la abre y procesa en la memoria de tu navegador con Canvas y las APIs del dispositivo. No envía el archivo, su nombre ni el resultado a nuestros servidores ni a servicios externos de procesamiento. No es necesario crear una cuenta.</p>
    <p>Las vistas previas utilizan direcciones locales temporales. El editor libera esas direcciones y sus recursos al sustituir el archivo, reiniciar o salir de la herramienta; el navegador gestiona la recuperación efectiva de memoria. No guardamos imágenes en una base de datos, cookies ni almacenamiento persistente. Las descargas permanecen donde tú las guardes.</p>
    <p>El original no se modifica. La exportación vuelve a codificar los píxeles, no conserva los metadatos originales y puede cambiar el color. La orientación se interpreta cuando el navegador lo permite. JPG sustituye la transparencia por blanco.</p>

    <h2>Funcionamiento técnico y Cloudflare</h2>
    <p>Cloudflare Pages sirve esta web. Su infraestructura recibe datos necesarios para entregar y proteger las conexiones, que pueden incluir dirección IP, fecha, URL e información técnica del navegador. Que las imágenes sean locales no significa que navegar sea anónimo ni que no existan registros técnicos.</p>
    <p>El proyecto no incorpora recopilación ni exportación propia de registros de visitas. Según la comprobación del panel comunicada por el titular, Cloudflare Web Analytics no está configurado. No se ha activado y no se utiliza para medir audiencia.</p>
    <p>Cloudflare publica criterios de conservación ligados a la finalidad, necesidad, riesgos y obligaciones aplicables. No existe en la documentación revisada un plazo único que podamos atribuir a todos los registros de Pages. No prometemos cero registros, borrado instantáneo ni alojamiento exclusivamente europeo.</p>
    <p>El <a href="https://www.cloudflare.com/terms/" rel="noreferrer">contrato de autoservicio</a> incorpora el <a href="https://www.cloudflare.com/cloudflare-customer-dpa/" rel="noreferrer">acuerdo de tratamiento de Cloudflare</a> en los supuestos aplicables. Este contempla medidas de seguridad y mecanismos de transferencia, incluidos DPF y cláusulas contractuales tipo según el caso. La <a href="https://www.cloudflare.com/privacypolicy/" rel="noreferrer">política de Cloudflare</a> describe sus tratamientos y criterios de conservación. Esas condiciones no garantizan ausencia de incidentes.</p>

    <h2>Contacto básico mediante Gmail de consumo</h2>
    <p>La web no tiene formularios de envío. Si escribes a <PublicContact />, el responsable y Gmail de Google recibirán tu dirección y el contenido para gestionar la conversación. Pedimos únicamente una descripción del problema o solicitud: no solicitamos documentos de identidad ni otros documentos personales por correo. No adjuntes imágenes privadas ni datos sensibles.</p>
    <p>Se utiliza Gmail de consumo, no Google Workspace. Google declara que no actúa como encargado ni ofrece un DPA para esa modalidad. No afirmamos que exista un contrato de encargo con Google ni que el uso de Gmail certifique cumplimiento. El titular mantiene el buzón como contacto básico, limita los datos y revisará esta elección si cambia la naturaleza o volumen de las comunicaciones.</p>
    <p>Google aplica sus <a href="https://policies.google.com/terms?hl=es" rel="noreferrer">condiciones</a> y <a href="https://policies.google.com/privacy?hl=es" rel="noreferrer">política de privacidad</a>, incluidos tratamientos propios. Publica <a href="https://policies.google.com/privacy/frameworks?hl=es" rel="noreferrer">mecanismos de transferencia</a> según el supuesto y <a href="https://policies.google.com/technologies/retention?hl=es" rel="noreferrer">criterios de conservación y borrado</a>. Puede procesar datos fuera del país del usuario; no prometemos residencia exclusiva en la UE ni desaparición inmediata de todas sus copias tras borrar un mensaje.</p>

    <h2>Finalidades y bases jurídicas</h2>
    <ul>
      <li>Consultas ordinarias: interés legítimo en responder a comunicaciones voluntarias y resolver incidencias (artículo 6.1.f del RGPD), limitado a los datos necesarios para esa conversación. No usamos el correo para publicidad ni perfiles.</li>
      <li>Entrega y seguridad técnica: interés legítimo en servir la web y prevenir abusos y accesos indebidos (artículo 6.1.f). No se extiende a publicidad ni medición de audiencia.</li>
      <li>Solicitudes de privacidad: cumplimiento de las obligaciones del responsable (artículo 6.1.c, en relación con los artículos 12 a 22 del RGPD). Se tratan solo los datos necesarios para atender y acreditar la solicitud, comprobando identidad de forma proporcionada sin solicitar documentos personales por correo.</li>
    </ul>
    <p>Escribirnos es voluntario. Necesitamos una dirección de respuesta y la información mínima para atender la consulta; no facilitarla puede impedir responder o tramitarla. No realizamos decisiones automatizadas ni perfiles. No vendemos datos ni los destinamos a marketing. Los proveedores pueden recibir datos para los usos descritos y puede haber comunicaciones exigidas legalmente.</p>

    <h2>Conservación y borrado</h2>
    <p>Consultas ordinarias: durante su tramitación y como máximo {siteConfig.legal.messageRetentionMonths} meses después de cerrarlas, con revisión mensual. Eliminamos antes adjuntos, documentos y datos innecesarios. Revisamos los hilos abiertos; tras 90 días sin actividad se evalúan para cerrar o continuar por un motivo concreto.</p>
    <p>Solicitudes de privacidad: tras su cierre conservamos durante un máximo de {siteConfig.legal.rightsEvidenceRetentionMonths} meses solo evidencia mínima de su recepción, derecho solicitado, fechas, respuesta y resultado, con el identificador de contacto imprescindible y acceso restringido. No conservamos automáticamente todo el expediente ni documentos innecesarios. Revisamos mensualmente y eliminamos lo vencido.</p>
    <p>Si existe una obligación, requerimiento o reclamación concreta, se separa únicamente la información necesaria, se documentan motivo y criterio de finalización y se conserva durante el tiempo aplicable al caso. No se prolonga todo el archivo por un riesgo genérico. Los 12 meses son una decisión organizativa del titular, no un plazo legal universal.</p>
    <p>El borrado incluye enviados, archivo, papelera y copias bajo nuestro control. La eliminación interna y de copias de seguridad del proveedor está sujeta a sus condiciones y puede demorarse; no está bajo control directo de ImageTools.</p>

    <h2>Derechos y reclamaciones</h2>
    <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad cuando procedan en <PublicContact />. Si te opones a un tratamiento por interés legítimo, valoraremos tu situación conforme al RGPD. Si algún tratamiento se basase en consentimiento, podrías retirarlo sin afectar a su licitud anterior.</p>
    <p>Atenderemos las solicitudes sin dilación indebida y, generalmente, dentro de un mes. Si procede una prórroga por complejidad o número de solicitudes, comunicaremos los motivos dentro del primer mes. Puedes reclamar ante la <a href="https://www.aepd.es/" rel="noreferrer">Agencia Española de Protección de Datos</a>.</p>

    <h2>Cookies, publicidad y otros servicios</h2>
    <p>El proyecto no añade cookies propias, almacenamiento persistente de seguimiento, Google Analytics, AdSense, píxeles publicitarios ni scripts de medición. Los espacios de anuncios están vacíos. El titular ha comunicado una comprobación pública en Edge con tabla de cookies vacía y sin solicitudes beacon detectadas; es una observación de ese momento, no una garantía sobre todo navegador o fecha.</p>
    <p>GitHub aloja el repositorio y suministra el código para el despliegue, pero no recibe las imágenes del editor. Google Search Console se utiliza para gestionar la presencia en el buscador; su archivo de verificación es estático y no ejecuta seguimiento.</p>
    <p>Antes de incorporar anuncios o tecnologías nuevas revisaremos esta información, los proveedores y las medidas de consentimiento que correspondan. Actualmente AdSense no está integrado ni activo.</p>
  </article>;
}
