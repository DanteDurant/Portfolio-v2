// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sass from 'sass';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	scss: {

		implementation: sass,
	},

	kit: {

		adapter: adapter(),

		prerender: {
			handleMissingId: "ignore",
		},
	},

};

export default config;
