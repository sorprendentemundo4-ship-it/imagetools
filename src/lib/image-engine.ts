import { fitRect, validateDimensions, type Rect } from './image-math';
export type Format = 'image/jpeg' | 'image/png' | 'image/webp';
export const formats: Format[] = ['image/jpeg','image/png','image/webp'];
export const extension=(f:Format)=>f==='image/jpeg'?'jpg':f.split('/')[1];
export function validateFile(file:File){
 if(!formats.includes(file.type as Format))throw new Error('Selecciona JPG, PNG o WebP. HEIC, SVG y GIF no son compatibles.');
 if(!file.size||file.size>30*1024*1024)throw new Error('El archivo debe pesar entre 1 byte y 30 MB.');
}
export async function decode(file:File):Promise<ImageBitmap>{
 validateFile(file); const bytes=new Uint8Array(await file.arrayBuffer());
 const text=(a:number,b:number)=>String.fromCharCode(...bytes.slice(a,b));
 const valid=file.type==='image/jpeg'?bytes[0]===255&&bytes[1]===216:file.type==='image/png'?bytes[0]===137&&text(1,4)==='PNG':text(0,4)==='RIFF'&&text(8,12)==='WEBP';
 if(!valid)throw new Error('El contenido del archivo no coincide con su formato.');
 // Read chunk identifiers without expanding the entire file into a string.
 for(let i=file.type==='image/png'?8:12;file.type!=='image/jpeg'&&i+8<=bytes.length;){
  const png=file.type==='image/png'; const view=new DataView(bytes.buffer); const length=view.getUint32(png?i:i+4,!png);const id=text(png?i+4:i,png?i+8:i+4);
  if(id==='acTL'||id==='ANIM')throw new Error('Las imágenes animadas no son compatibles. Utiliza una imagen estática.');
  i+=png?length+12:8+length+(length%2);
 }
 let bitmap:ImageBitmap;
 try{bitmap=await createImageBitmap(file,{imageOrientation:'from-image'});}catch{throw new Error('No se pudo abrir la imagen. Puede estar dañada o superar la memoria disponible.');}
 if(bitmap.width*bitmap.height>32_000_000||bitmap.width>16384||bitmap.height>16384){bitmap.close();throw new Error('Máximo de entrada: 32 megapíxeles y 16384 px por lado.');}return bitmap;
}
export async function renderImage(source:ImageBitmap,o:{width:number;height:number;format:Format;quality:number;crop?:Rect;fit?:'cover'|'contain';x?:number;y?:number;background?:string}){
 const {width,height,format,quality,crop}=o;validateDimensions(width,height);const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
 try{const ctx=canvas.getContext('2d');if(!ctx)throw new Error('No hay memoria suficiente para crear el lienzo.');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 if(format==='image/jpeg'||o.fit==='contain'){ctx.fillStyle=o.background||'#ffffff';ctx.fillRect(0,0,width,height);}
 if(crop)ctx.drawImage(source,crop.x,crop.y,crop.width,crop.height,0,0,width,height);
 else if(o.fit){const r=fitRect(source.width,source.height,width,height,o.fit,o.x,o.y);ctx.drawImage(source,r.x,r.y,r.width,r.height);}else ctx.drawImage(source,0,0,width,height);
 const blob=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('No se pudo generar la imagen. Reduce las dimensiones.')),format,quality));
 if(blob.type!==format)throw new Error('Tu navegador no admite exportar este formato. Prueba PNG o JPG.');return blob;
 }finally{canvas.width=0;canvas.height=0;}
}
