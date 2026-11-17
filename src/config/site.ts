export const siteConfig = {
 name:'ImageTools', description:'Edita, convierte y optimiza imágenes gratis, directamente en tu navegador.',publicUrl:'https://imagetools-3sd.pages.dev',indexingEnabled:true,language:'es',locale:'es_ES',
 // Introduce aquí tu correo público para contacto y solicitudes de privacidad.
 // También puede configurarse con NEXT_PUBLIC_CONTACT_EMAIL durante el build.
 contactEmail:'sorprendentemundo4@gmail.com',
 legal: {
   responsibleName: 'Oscar Virgili Serrano',
   emailProvider: 'Gmail de Google',
   messageRetentionMonths: 12,
   rightsEvidenceRetentionMonths: 12,
   // Información confirmada por el titular en el panel; no modifica Cloudflare.
   cloudflareWebAnalyticsConfigured: false,
 },
 hero:{label:'UN PEQUEÑO CAMBIO. UNA GRAN IMAGEN.',title:'Grandes ideas. Imágenes perfectas.',description:'Convierte, comprime y da forma a tus imágenes en segundos. Gratis, sin registros y sin que tus archivos salgan de tu dispositivo.'},
 colors:{primary:'#5652e8',primaryHover:'#413bc4',surface:'#f6f7fc',text:'#20243d'},
 pages:[
 {path:'/',title:'Edita, convierte y optimiza imágenes gratis',description:'Seis herramientas para convertir, comprimir, redimensionar y recortar imágenes en tu navegador. Gratis y sin subir archivos.',readyToIndex:true},
 {path:'/acerca-de',title:'Acerca de ImageTools',description:'Conoce las herramientas locales de ImageTools y cómo cuidamos tus imágenes.',readyToIndex:true},
 {path:'/contacto',title:'Contacto',description:'Contacta con Oscar Virgili Serrano para consultas sobre ImageTools y solicitudes de privacidad.',readyToIndex:false},
 {path:'/privacidad',title:'Privacidad',description:'Procesamiento local de imágenes, proveedores, contacto, conservación de mensajes y derechos de privacidad en ImageTools.',readyToIndex:false},
 {path:'/aviso-legal',title:'Aviso legal',description:'Responsable de ImageTools, condiciones de uso y alcance de este proyecto personal gratuito gestionado desde España.',readyToIndex:false},
 ]
};
