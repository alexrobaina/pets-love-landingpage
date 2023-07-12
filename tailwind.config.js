/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        petLove: "url('../../assets/illustrations/background.svg')",

        colors: {
          'text-primary-600': '#4A4DA6',
        },
      },
    },
  },
  plugins: [],
}
