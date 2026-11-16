import Link from 'next/link';
export default function NotFound() {
  return <section className="container section"><span className="eyebrow">404</span><h1>Página no encontrada</h1><p>La dirección solicitada no existe.</p><Link className="button" href="/">Volver al inicio</Link></section>;
}
