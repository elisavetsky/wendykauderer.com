import colors from "tailwindcss/colors"

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
			screens: {
				'3xl': '1700px',
			},
			colors: {
				"primary": {
					DEFAULT: colors.gray[100],
					text: colors.gray[800],
					"button-hover": colors.gray[200],
					"button-hover-shadow" : colors.black
				},
				"primary-dark": {
					DEFAULT: colors.zinc[800],
					text: colors.zinc[100],
					"button-hover": colors.zinc[700],

				}
			},
			keyframes: {
				"fadeIn": {
					'0%': { opacity: "0" },
					'100%': { opacity: "0.3" },
				},
				"fadeIn-dark": {
					'0%': { opacity: "0" },
					'100%': { opacity: "0.3" },
				},
				"fadeIn-fullOpacity": {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			animation: {
				"bgFadeIn": "2s ease fadeIn both",
				"bgFadeIn-dark": "2s ease fadeIn-dark both",
				"fadeIn-fullOpacity": "0.8s ease-in-out fadeIn-fullOpacity both"
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
