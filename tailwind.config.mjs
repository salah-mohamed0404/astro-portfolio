import { amber } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{astro,html,js,jsx,md,mdx}"];
export const theme = {
	extend: {
		colors: {
			primary: amber,
		},
		fontFamily: {
			en: ["Montserrat", "sans-serif"],
			ar: ["Almarai", "sans-serif"],
		},
		transitionDuration: {
			DEFAULT: "300ms",
		},
	},
};
export const plugins = [];
export const darkMode = "class";
