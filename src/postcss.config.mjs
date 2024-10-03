/** @type {import('postcss-load-config').Config} */
const config = {
  content: ["./src/**/*.{js,jsx,html,css}", "./public/index.html"],

  plugins: {
    tailwindcss: {},
  },
};

export default config;
