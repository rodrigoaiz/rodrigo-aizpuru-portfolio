import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkmode: 'class',
	theme: {
		screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
		extend: {
			colors: {
			light: 'rgb(var(--honeydew) / <alpha-value>)'
		}
		},
	},
	plugins: [
		animations,
		require('flowbite/plugin')
	],
}
