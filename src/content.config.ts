import {defineCollection} from 'astro:content';
import {z} from 'astro/zod';
import {glob} from 'astro/loaders';
const author=z.object({name:z.string(),url:z.string().optional(),html:z.string(),hidden:z.boolean().optional()});
const schema=z.object({slug:z.string(),title:z.string(),date:z.string(),summary:z.string(),summaryHtml:z.string(),tags:z.array(z.string()),image:z.string(),imageAlt:z.string(),cardOrder:z.number(),section:z.enum(['Posts','Research']),authors:z.array(author).default([]),visibleAuthorCount:z.number().optional(),venueHtml:z.string().default(''),resources:z.array(z.object({label:z.string(),url:z.string(),html:z.string()})).default([]),selectedOnAbout:z.boolean().default(false),toc:z.array(z.object({id:z.string(),text:z.string(),level:z.number()})),headerHtml:z.string().default('')});
const collection=(section:string)=>defineCollection({loader:glob({pattern:'**/*.mdx',base:`./src/content/${section}`,generateId:({entry})=>entry.replace(/\.mdx$/,'')}),schema});
export const collections={posts:collection('posts'),research:collection('research')};
