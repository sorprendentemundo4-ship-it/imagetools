import Link from 'next/link';
import type { ToolDefinition } from '@/config/types';
import { tools } from '@/config/tools';
import { AdSlot } from './shell';

export function ToolLayout({ tool, children }: { tool: ToolDefinition; children: React.ReactNode }) {
  return <article className="container section">
    <nav className="breadcrumbs" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true"> / </span><span aria-current="page">{tool.title}</span></nav>
    <header className="page-heading"><h1>{tool.title}</h1><p>{tool.description}</p></header>
    <section className="panel" aria-label="Herramienta interactiva">{children}</section>
    <div className="prose">
      {tool.explanation && <section><h2>Cómo funciona</h2><p>{tool.explanation}</p></section>}
      {tool.example && <section><h2>Ejemplo práctico</h2><p>{tool.example}</p></section>}
      {tool.limitations && <section><h2>Limitaciones</h2><p>{tool.limitations}</p></section>}
      {!!tool.faqs?.length && <section><h2>Preguntas frecuentes</h2>{tool.faqs.map(faq => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>}
    </div>
    <AdSlot placement={'tool-' + tool.slug} />
    {tools.length > 1 && <aside className="related"><h2>Otras herramientas</h2>{tools.filter(item => item.slug !== tool.slug).map(item => <Link key={item.slug} href={'/herramientas/' + item.slug}>{item.title} →</Link>)}</aside>}
  </article>;
}
