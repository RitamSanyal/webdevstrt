import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: [
			{
				find: '__SERVER__',
				replacement: path.resolve(process.cwd(), '.svelte-kit/generated/server')
			}
		]
	}
});
