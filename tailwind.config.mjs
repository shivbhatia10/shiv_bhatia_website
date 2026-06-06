import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#1a1a1a',
        muted: '#6b6b6b',
        rule: '#e5e5e5',
        accent: '#0a6cff',
        paper: '#fbfaf7',
      },
      maxWidth: {
        prose: '38rem',
        page: '44rem',
      },
    },
  },
  plugins: [typography],
};
