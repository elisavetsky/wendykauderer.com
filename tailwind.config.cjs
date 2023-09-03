/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				seascape: ['Seascape', 'sans-serif'],
				jamesarthur: ['James Arthur Regular', 'sans-serif'],
				southampton: ['Southampton', 'sans-serif']
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
