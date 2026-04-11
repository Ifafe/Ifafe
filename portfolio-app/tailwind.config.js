/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#3b82f6",
					dark: "#2563eb",
					light: "#60a5fa",
				},
				secondary: {
					DEFAULT: "#8b5cf6",
					dark: "#7c3aed",
					light: "#a78bfa",
				},
				accent: {
					DEFAULT: "#0ea5e9",
					dark: "#0284c7",
					light: "#38bdf8",
				},
				dark: {
					DEFAULT: "#030712",
					lighter: "#111827",
					border: "#1f2937",
				},
				light: "#f8fafc",
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
			},
			zIndex: {
				'15': '15',
			},
			animation: {
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'float': 'float 6s ease-in-out infinite',
				'slide-down': 'slideDown 0.3s ease-out',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			}
		},
	},
	plugins: [],
}


