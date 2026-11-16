export type Rect = { x: number; y: number; width: number; height: number };
export function validateDimensions(width: number, height: number) {
 if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 8192 || height > 8192 || width * height > 24_000_000) throw new Error('Usa dimensiones enteras de 1 a 8192 px y hasta 24 megapíxeles.');
}
export function savings(before: number, after: number) { return (1-after/before)*100; }
export function fitRect(sw:number,sh:number,tw:number,th:number,mode:'cover'|'contain',x=0.5,y=0.5):Rect {
 const scale=mode==='cover'?Math.max(tw/sw,th/sh):Math.min(tw/sw,th/sh); const width=sw*scale,height=sh*scale;
 return {x:(tw-width)*x,y:(th-height)*y,width,height};
}
export function cropRect(width:number,height:number,ratio:number,size:number,x:number,y:number,freeHeight=size):Rect {
 let w=width*size/100,h=ratio?w/ratio:height*freeHeight/100;
 if(h>height){w*=height/h;h=height;} return {x:(width-w)*x/100,y:(height-h)*y/100,width:w,height:h};
}
