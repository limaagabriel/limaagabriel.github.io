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
const currentTheme = ref('solarized-light')

const changeTheme = () => {
  if (currentTheme.value === 'solarized-light') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', currentTheme.value)
  }
  
  if (process.client) {
    localStorage.setItem('theme', currentTheme.value)
  }
}

onMounted(() => {
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      currentTheme.value = savedTheme
      changeTheme()
    }
  }
})
</script>
