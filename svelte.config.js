import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sass from 'sass';
import fs from 'fs';

const globalStyles = fs.readFileSync('./src/global.scss', 'utf-8');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: "ignore",
		},
	},
	preprocess: vitePreprocess({
		scss: {
			implementation: sass,
			prependData: globalStyles,
		},
	}),
};

export default config;