/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

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
					'100%': { opacity: '0.3' },
				},
				"fadeIn-dark": {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.3' },
				}
			},
			animation: {
				"bgFadeIn": "1s ease 0.2s fadeIn both",
				"bgFadeIn-dark": "1s ease 0.2s fadeIn-dark both"
			},
			fontFamily: {
				sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
				jamesarthur: ['James Arthur Regular', "Georgia", "New York", "Cochin", 'Times New Roman', "Times", "ui-serif", "serif", "system-ui", "sans-serif"],
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
						'--tw-prose-body': theme('colors.gray.800 / 90%'),
						'--tw-prose-invert-body': theme('colors.zinc.50 / 90%'),
						'--tw-prose-headings': theme('colors.gray.800 / 90%'),
						'--tw-prose-invert-headings': theme('colors.zinc.50 / 90%'),
						'--tw-prose-hr': theme('colors.gray.800 / 90%'),
						'--tw-prose-invert-hr': theme('colors.zinc.500 / 90%'),
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
