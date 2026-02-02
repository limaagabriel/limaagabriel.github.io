export default {
  content: [
    './app/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
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
        },
      },
    },
  },
}
