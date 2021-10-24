const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primary: colors.blueGray,
			secondary: colors.indigo,
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue,
			indigo: colors.indigo,
		},
		fontSize: {
			'2xs': ['.65rem', '0.875rem'],
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
