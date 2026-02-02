<template>
  <div class="flex items-center gap-2">
    <label for="theme" class="text-sm text-theme-fg">Theme:</label>
    <select 
      id="theme" 
      v-model="currentTheme" 
      @change="changeTheme"
      class="bg-theme-bg text-theme-fg border border-theme-border px-2 py-1 font-mono text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-theme-accent"
    >
      <option value="solarized-light">Solarized Light</option>
      <option value="solarized-dark">Solarized Dark</option>
      <option value="monomania">Monomania</option>
      <option value="github-light">GitHub Light</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const THEME_DEFAULTS = {
  light: 'solarized-light',
  dark: 'solarized-dark'
} as const

const currentTheme = ref('solarized-light')

const applyTheme = (theme: string) => {
  if (theme === 'solarized-light') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

const getSystemTheme = (): 'light' | 'dark' => {
  if (process.client && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'light'
}

const changeTheme = () => {
  applyTheme(currentTheme.value)
  
  if (process.client) {
    localStorage.setItem('theme', currentTheme.value)
  }
}

const initializeTheme = () => {
  if (!process.client) return

  const savedTheme = localStorage.getItem('theme')
  
  if (savedTheme) {
    currentTheme.value = savedTheme
  } else {
    const systemMode = getSystemTheme()
    currentTheme.value = THEME_DEFAULTS[systemMode]
  }
  
  applyTheme(currentTheme.value)
}

const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  const hasSavedTheme = localStorage.getItem('theme')
  
  if (!hasSavedTheme) {
    const systemMode = e.matches ? 'dark' : 'light'
    currentTheme.value = THEME_DEFAULTS[systemMode]
    applyTheme(currentTheme.value)
  }
}

onMounted(() => {
  initializeTheme()
  
  if (process.client && window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeQuery.addEventListener('change', handleSystemThemeChange)
    
    onBeforeUnmount(() => {
      darkModeQuery.removeEventListener('change', handleSystemThemeChange)
    })
  }
})
</script>
