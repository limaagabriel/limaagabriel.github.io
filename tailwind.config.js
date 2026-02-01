/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Iosevka', 'monospace'],
        'sans': ['Lexend Deca', 'sans-serif'],
      },
      colors: {
        theme: {
          bg: 'var(--theme-bg)',
          'bg-alt': 'var(--theme-bg-alt)',
          fg: 'var(--theme-fg)',
          'fg-emphasis': 'var(--theme-fg-emphasis)',
          accent: 'var(--theme-accent)',
          secondary: 'var(--theme-secondary)',
          highlight: 'var(--theme-highlight)',
          border: 'var(--theme-border)',
          selection: 'var(--theme-selection)',
        }
      }
    },
  },
  plugins: [],
}
