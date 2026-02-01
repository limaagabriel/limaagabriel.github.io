<template>
  <div class="editor-layout">
    <header class="menu-bar">
      <nav>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About/Portfolio</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </nav>
      
      <div class="theme-selector">
        <label for="theme">Theme:</label>
        <select id="theme" v-model="currentTheme" @change="changeTheme">
          <option value="solarized-light">Solarized Light</option>
          <option value="solarized-dark">Solarized Dark</option>
          <option value="monomania">Monomania</option>
          <option value="github-light">GitHub Light</option>
        </select>
      </div>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
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
  // Save theme preference
  if (process.client) {
    localStorage.setItem('theme', currentTheme.value)
  }
}

// Load saved theme on mount
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
