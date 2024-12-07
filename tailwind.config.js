/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure the content path matches your project structure
  ],
  theme: {
    extend: {}, // Add your customizations here if needed
  },
  plugins: [
    // Add Tailwind plugins here if needed
    // Example: require('@tailwindcss/forms'),
    // Example: require('@tailwindcss/typography'),
  ],
};
