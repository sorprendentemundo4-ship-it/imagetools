import type { Category, ToolDefinition } from '../config/types';

export const normalize = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function filterTools(tools: readonly ToolDefinition[], query: string, categoryId = '') {
  const text = normalize(query.trim());
  return tools.filter(tool =>
    (!categoryId || categoryId === tool.categoryId) &&
    normalize([tool.title, tool.description, ...tool.keywords].join(' ')).includes(text));
}

export function validateCatalog(tools: readonly ToolDefinition[], categories: readonly Category[]) {
  const ids = new Set(categories.map(c => c.id));
  if (ids.size !== categories.length) throw new Error('Las categorías deben tener identificadores únicos.');
  const slugs = new Set<string>();
  for (const tool of tools) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(tool.slug) || slugs.has(tool.slug))
      throw new Error('Cada herramienta necesita un slug único y descriptivo.');
    if (!ids.has(tool.categoryId)) throw new Error('La categoría de la herramienta no existe.');
    if (!tool.title.trim() || !tool.description.trim()) throw new Error('Título y descripción son obligatorios.');
    slugs.add(tool.slug);
  }
}
