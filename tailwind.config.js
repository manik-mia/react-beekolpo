/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3F52CA",
                secondary: "#016EEF",
                "primary-light": "#B8BEE5",
                "heading-border": "#00C48C",
                "primary-bg": "#E6E6E6",
                "secondary-bg": "#CFCFCF",
                rating: "#FCBF13",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
