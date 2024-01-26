const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				wiggle: "wiggle .4s ease-in-out infinite",
			},
			colors: {
				primary: "#038C7F",
				secondary: "#F2C641",
				tertiary: {
					dark: "#F27405",
					light: "#F2C641",
				},
			},
			fontFamily: {
				poppins: ["var(--font-poppins)", ...fontFamily.sans],
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
		},
	},
	plugins: [],
};
