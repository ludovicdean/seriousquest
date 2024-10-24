const {addIconSelectors} = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'accent-orange': "var(--accent-orange)",
                'accent-yellow': "var(--accent-yellow)",
            }
        },
    },
    plugins: [],
}
