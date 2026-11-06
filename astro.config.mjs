import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export default defineConfig({ site: 'https://shahved25.github.io', output: 'static', trailingSlash: 'ignore', integrations: [mdx()], markdown: { processor: unified({remarkPlugins: [remarkMath], rehypePlugins: [[rehypeKatex, {strict:false}]]}), shikiConfig: { themes: {light:'github-light',dark:'github-dark'} } }, devToolbar: {enabled:false} });
