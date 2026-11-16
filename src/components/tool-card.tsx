import Link from 'next/link';
import type { ToolDefinition } from '@/config/types';

export function ToolCard({ tool, category }: { tool: ToolDefinition; category: string }) {
  return <Link className="tool-card" href={'/herramientas/' + tool.slug}>
    <div className="card-heading"><span className="tool-symbol" aria-hidden="true">{tool.symbol}</span><span>{category}</span></div>
    <h3>{tool.title}</h3>
    <p>{tool.description}</p>
    <span className="card-link">Abrir herramienta <span aria-hidden="true">→</span></span>
  </Link>;
}
