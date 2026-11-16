import { notFound } from 'next/navigation';
import { tools } from '@/config/tools';
import { metadataFor,toolPath } from '@/lib/site';
import { ToolLayout } from '@/components/tool-layout';
import { ImageEditor } from '@/components/image-editor';
export const dynamicParams=false;
export function generateStaticParams(){return tools.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!tools.some(t=>t.slug===slug))notFound();return metadataFor(toolPath(slug));}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const tool=tools.find(t=>t.slug===slug);if(!tool)notFound();return <ToolLayout tool={tool}><ImageEditor key={slug} slug={slug}/></ToolLayout>;}
