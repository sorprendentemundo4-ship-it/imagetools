import test from 'node:test';
import assert from 'node:assert/strict';
import {cropRect,fitRect,savings,validateDimensions} from '../src/lib/image-math.ts';
test('dimensiones seguras y límites de memoria',()=>{validateDimensions(1080,1920);for(const pair of [[0,1],[-1,2],[1.2,2],[9000,1],[6000,6000],[NaN,2]])assert.throws(()=>validateDimensions(pair[0],pair[1]));});
test('cover conserva proporciones y llena el lienzo',()=>{assert.deepEqual(fitRect(400,200,100,100,'cover'),{x:-50,y:0,width:200,height:100});});
test('contain conserva foto completa con márgenes',()=>{assert.deepEqual(fitRect(400,200,100,100,'contain'),{x:0,y:25,width:100,height:50});});
test('recorte permanece dentro de límites y respeta ratios',()=>{for(const ratio of [1,4/3,16/9])for(const pos of [0,50,100]){const r=cropRect(300,600,ratio,80,pos,pos);assert.ok(r.x>=0&&r.y>=0&&r.x+r.width<=300&&r.y+r.height<=600);assert.ok(Math.abs(r.width/r.height-ratio)<1e-10);}});
test('recorte libre usa ancho y alto independientes',()=>assert.deepEqual(cropRect(400,200,0,50,50,50,25),{x:100,y:75,width:200,height:50}));
test('ahorro real refleja crecimiento',()=>{assert.equal(savings(100,50),50);assert.ok(Math.abs(savings(100,120)+20)<1e-10);assert.equal(savings(100,100),0);});

