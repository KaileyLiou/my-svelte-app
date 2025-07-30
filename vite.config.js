import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/my-svelte-app/',
  plugins: [svelte({ preprocess: vitePreprocess() })]
});