import { contactEmail } from '@/lib/site';

export function PublicContact() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)
    ? <a href={'mailto:' + contactEmail}>{contactEmail}</a>
    : <span>PENDIENTE: introducir el correo público en la configuración de ImageTools.</span>;
}
