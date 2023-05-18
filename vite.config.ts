import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		assetsDir: './src/lib/images', // Change 'assets' to the actual directory name where Logo.png is located
	},
});