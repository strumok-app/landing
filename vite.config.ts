import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { inlineSvg } from '@svelte-put/inline-svg/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		inlineSvg({
			directories: ['src/assets/images'],
		}), 
		sveltekit()
	]
});
