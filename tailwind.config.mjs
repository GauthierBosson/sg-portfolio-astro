import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'2xl': '1440px',
		},
		extend: {
			fontFamily: {
				sans: ['Gabarito Variable', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
				'contact-gradient':
					'linear-gradient(110deg, rgba(139, 255, 255, 0.20) 34.31%, rgba(183, 255, 212, 0.20) 67.04%);',
			},
			keyframes: {
				'spin-around-left': {
					'0%': {
						transform: 'rotate(0deg) translate(10px) translateX(0)',
					},
					'50%': {
						transform: 'rotate(180deg) translate(60px) translateX(50%)',
					},
					'100%': {
						transform: 'rotate(360deg) translate(60px) translateX(0)',
					},
				},
				'spin-around-right': {
					'0%': {
						transform: 'rotate(0deg) translate(50px) translateX(0)',
					},
					'50%': {
						transform: 'rotate(180deg) translate(50px) translateX(50%)',
					},
					'100%': {
						transform: 'rotate(360deg) translate(50px) translateX(0)',
					},
				},
			},
			animation: {
				'spin-around-left': 'spin-around-left 6s linear infinite offset-1s',
				'spin-around-right': 'spin-around-right 6s linear infinite',
			},
		},
	},
	plugins: [],
}
