import test from 'node:test';
import assert from 'node:assert/strict';
import {filterTools,validateCatalog} from '../src/lib/catalog.ts';
import {tools,categories} from '../src/config/tools.ts';
test('seis herramientas con rutas y categorías válidas',()=>{assert.equal(tools.length,6);validateCatalog(tools,categories);});
test('busca sin distinguir tildes ni mayúsculas',()=>{assert.equal(filterTools(tools,' CONVERSIONES ')[0].slug,'cambiar-formato');assert.equal(filterTools(tools,'imagenes').length,4);});
test('combina texto y categoría',()=>{assert.equal(filterTools(tools,'','optimizar').length,1);assert.equal(filterTools(tools,'inexistente').length,0);});
test('rechaza catálogo inválido',()=>{assert.throws(()=>validateCatalog([tools[0],tools[0]],categories));assert.throws(()=>validateCatalog(tools,[]));});
