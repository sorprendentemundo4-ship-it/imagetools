'use client';
import { useState } from 'react';
import { tools, categories } from '@/config/tools';
import { filterTools } from '@/lib/catalog';
import { ToolCard } from './tool-card';

export function Catalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const visible = filterTools(tools, query, category);
  return <section className="container section" id="herramientas" aria-labelledby="catalog-title">
    <h2 id="catalog-title">Herramientas</h2>
    <label className="search-field">
      <span>Buscar herramientas</span>
      <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Nombre, tema o palabra clave" />
    </label>
    <div className="filters" role="group" aria-label="Filtrar por categoría">
      <button type="button" aria-pressed={!category} onClick={() => setCategory('')}>Todas</button>
      {categories.map(item => <button type="button" key={item.id} aria-pressed={category === item.id} onClick={() => setCategory(item.id)}>{item.label}</button>)}
    </div>
    <p role="status" className="catalog-status">{visible.length} herramientas disponibles</p>
    <div className="tool-grid">{visible.map(tool => <ToolCard key={tool.slug} tool={tool} category={categories.find(c => c.id === tool.categoryId)?.label || ''} />)}</div>
    {visible.length === 0 && <p className="empty-state">{tools.length === 0 ? 'Todavía no se han añadido herramientas a este proyecto.' : 'No hay resultados para esta búsqueda.'}</p>}
  </section>;
}
