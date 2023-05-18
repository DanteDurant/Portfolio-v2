// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import sass from 'sass';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	scss: {
		// Optional: Provide options for Sass compiler
		// Example options:
		// includePaths: ['./src/styles'], // Additional include paths for Sass
		// outputStyle: 'compressed', // Output style of the compiled CSS
		// ... other Sass options
		implementation: sass, // Use `sass` as the Sass implementation
	},

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		target: '#svelte',
		adapter: adapter()
	}


	
};

export default config;
