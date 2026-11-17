import { metadataFor } from '@/lib/site';
import { PublicContact } from '@/components/public-contact';
import { siteConfig } from '@/config/site';

export const metadata = metadataFor('/contacto');

export default function Contact() {
  return <article className="container prose section">
    <h1>Hablemos de ImageTools</h1>
    <p>ImageTools es un proyecto personal gratuito gestionado por una persona física residente en España. Actualmente no genera ingresos ni incorpora publicidad, afiliación o patrocinios.</p>
    <h2>Contacto y privacidad</h2>
    <p>Responsable: {siteConfig.legal.responsibleName}. Proveedor del buzón: {siteConfig.legal.emailProvider}.</p>
    <p><PublicContact /></p>
    <p>El mismo correo se utilizará para consultas sobre las herramientas y solicitudes de privacidad. No hay un formulario de envío en la web.</p>
    <p>Para comunicar un error, indica la herramienta, el navegador, los pasos y el mensaje que aparece. No necesitamos tu imagen original para una primera consulta: no envíes imágenes privadas, documentos de identidad ni otros documentos personales.</p>
    <p>Si decides escribir, el responsable y su proveedor de correo recibirán tu dirección y el contenido del mensaje para gestionar la consulta. Las consultas ordinarias se conservan durante su tramitación y hasta {siteConfig.legal.messageRetentionMonths} meses después de cerrarlas, con revisión y borrado mensual. La página de privacidad detalla el tratamiento, las limitaciones de Gmail de consumo y la conservación diferenciada de evidencias de solicitudes de derechos.</p>
    <h2>Tus imágenes permanecen en tu dispositivo</h2>
    <p>Seleccionar una imagen en las herramientas no la envía al correo de contacto ni a nuestros servidores. La edición y la generación de la descarga se realizan en tu navegador.</p>
  </article>;
}
