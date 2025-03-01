// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/devsfiae',
			},
			sidebar: [
				{
					label: 'Anleitungen',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Erste Schritte', slug: '00/welcome' },
					],
				},
				{
					label: 'Abschlussprüfungen',
					autogenerate: { directory: '01' },
				},
			],
		}),
	],
});
