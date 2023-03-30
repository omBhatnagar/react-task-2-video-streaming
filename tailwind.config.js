const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"light-blue": colors.lightBlue,
				cyan: colors.cyan,
				"yt-black": "#181818",
			},
		},
	},
	plugins: [],
};
