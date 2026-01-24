/** @type {import('tailwindcss').Config} */
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
            extend: {
                  colors: {
                        primary: "#02569B", // Flutter Blue
                        secondary: "#0175C2", // Flutter Light Blue
                        accent: "#FFCA28", // Firebase Amber
                        dark: "#121212",
                        light: "#F5F5F5",
                  },
                  fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                  }
            },
      },
      plugins: [],
}
