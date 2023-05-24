import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';

// Code Hightlighting
import shiki from 'shiki';

// Markdown Plugins
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/lib/mdsvex/layout.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({
				theme: 'dracula'
			});

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\`}`;
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		alias: {
			$: './src'
		}
	}
};

export default config;
