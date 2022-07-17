import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['@carbon/charts', 'carbon-components-svelte'],
	},
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components']
	},
};

export default config;
