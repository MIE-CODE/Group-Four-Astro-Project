/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "390px", // Small screens, e.g., phones
        md: "835px", // Medium screens, e.g., tablets
        lg: "1024px", // Large screens, e.g., laptops
        xl: "1280px", // Extra-large screens, e.g., desktops
        "2xl": "1536px", // Extra-extra-large screens, e.g., large desktops
      },
      fontFamily: {
        "red-hat": ["Red Hat Display", "sans"],
      },
    },
  },
  plugins: [],
};
