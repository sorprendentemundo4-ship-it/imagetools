import { metadataFor } from '@/lib/site';
import { PublicContact } from '@/components/public-contact';
import { siteConfig } from '@/config/site';

export const metadata = metadataFor('/aviso-legal');

export default function Legal() {
  return <article className="container prose section">
    <h1>Aviso legal</h1>
    <p className="notice">Información del proyecto y sus condiciones de uso. No se afirma cumplimiento legal certificado.</p>
    <h2>Un proyecto personal gratuito</h2>
    <p>ImageTools es un proyecto personal gratuito gestionado por una persona física residente en España. Según la información facilitada por su gestor, actualmente no genera ingresos, no tiene publicidad, afiliación ni patrocinios. No existe una empresa titular de esta actividad.</p>
    <p>Contacto para consultas y privacidad: <PublicContact /></p>
    <p>Responsable del proyecto: {siteConfig.legal.responsibleName}, persona física residente en España. ImageTools es el nombre del proyecto.</p>
    <h2>Situación actual y futura monetización</h2>
    <p>El ámbito de la LSSI depende de si existe una actividad económica. La gratuidad para el visitante no basta para excluirla; la financiación con publicidad o la promoción de una actividad profesional pueden cambiar su aplicación. El alta o la ausencia de alta como autónomo no determina por sí sola ese ámbito.</p>
    <p>Existe la intención de monetizar con Google AdSense en el futuro, pero no está integrado ni activo. Antes de monetizar se revisarán la identificación del prestador, las obligaciones de información, los proveedores de publicidad y, cuando corresponda, el consentimiento para cookies u otras tecnologías. También habrá que valorar las obligaciones fiscales y de actividad que correspondan a la situación de ese momento.</p>
    <p>La actividad declarada es personal y gratuita, sin ingresos ni promoción profesional. Si cambia y resulta aplicable la LSSI, deberán incorporarse los datos exigibles de domicilio o establecimiento, NIF y demás identificación que corresponda. No se inventan datos registrales ni se atribuye al gestor una empresa.</p>
    <h2>Uso y límites técnicos</h2>
    <p>Las herramientas permiten convertir, redimensionar, comprimir, recortar y adaptar imágenes sin cuenta ni subida de archivos al servidor. Utiliza imágenes sobre las que tengas derechos o autorización.</p>
    <p>La compatibilidad depende del formato, el navegador y la memoria. La exportación puede cambiar calidad, color y metadatos. La compresión no siempre reduce el peso. Revisa el resultado y conserva tu original. Estas explicaciones no excluyen derechos o responsabilidades que no puedan excluirse legalmente.</p>
    <h2>Contenidos</h2>
    <p>Las condiciones de reutilización del código y los contenidos deben determinarse según su titularidad y las licencias aplicables. Este texto no concede derechos sobre materiales de terceros.</p>
  </article>;
}
