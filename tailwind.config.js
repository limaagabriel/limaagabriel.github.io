export default {
  content: ['./app/**/*.{js,vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      colors: {
        'theme-bg': 'var(--theme-bg)',
        'theme-bg-alt': 'var(--theme-bg-alt)',
        'theme-fg': 'var(--theme-fg)',
        'theme-fg-emphasis': 'var(--theme-fg-emphasis)',
        'theme-accent': 'var(--theme-accent)',
        'theme-secondary': 'var(--theme-secondary)',
        'theme-highlight': 'var(--theme-highlight)',
        'theme-border': 'var(--theme-border)',
        'theme-selection': 'var(--theme-selection)',
      },
    },
  },
}
