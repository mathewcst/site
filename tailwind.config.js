/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				fira: ['Fira Mono', 'monospace']
			},
			colors: {
				'mathew-purple': '#270e2f',
				'mathew-blue': '#5a86e9',
				'mathew-teal': '#7bffca'
			}
		}
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: ['dark']
	}
};
