import animations from 'tailwindcss-animated'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkled: 'class',
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
			light: 'rgb(var(--blanco) / <alpha-value>)',
      dark: 'rgb(var(--negromorado) / <alpha-value>)',
      red: 'rgb(var(--rojo) / <alpha-value>)',
      lightred: 'rgb(var(--rojo-tenue) / <alpha-value>)',
      yellow: 'rgb(var(--amarillo) / <alpha-value>)',
      blue: 'rgb(var(--azul) / <alpha-value>)',
      violet: 'rgb(var(--purpura) / <alpha-value>)'
		  },
      fontFamily: {
        'heading':['"Frank Ruhl Libre Variable"']
      }
		},
	},
	plugins: [
		animations, typography,
		require('flowbite/plugin')
	],
}
