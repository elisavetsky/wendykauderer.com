/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		supports: {
			filter: "filter: blur(40px)"
		},
		extend: {
			keyframes: {
				"fadeIn": {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.2' },
				},
				"fadeIn-dark": {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.25' },
				}
			},
			animation: {
				"bgFadeIn": "fadeIn 1s linear",
				"bgFadeIn-dark": "fadeIn-dark 1s linear"
			},
			fontFamily: {
				seascape: ["Seascape", "sans-serif"],
				jamesarthur: ["James Arthur Regular", "sans-serif"],
				southampton: ["Southampton", "sans-serif"],
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						p: {
							"font-family": [
								"Inter var",
								"system-ui",
								"Helvetica Neue",
								"Helvetica",
								"sans-serif",
							],
						},
					},
				},
				zinc: {
					css: {
						'--tw-prose-body': theme('colors.zinc[800]'),
						'--tw-prose-invert-body': theme('colors.zinc[50]'),
						'--tw-prose-hr': theme('colors.zinc[800]'),
						'--tw-prose-invert-hr': theme('colors.zinc[600]'),
					}
				}
			}),
			dropShadow: {
				"white": "0 0px 2px rgba(253, 253, 253)",
			},
			transitionProperty: {
				"background": "background-color"
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
