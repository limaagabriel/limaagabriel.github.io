<template>
  <nav class="flex gap-8">
    <NuxtLink 
      to="/" 
      class="text-theme-fg font-medium hover:text-theme-accent transition-colors"
      active-class="text-theme-accent border-b-2 border-theme-accent"
    >
      Home
    </NuxtLink>
    <NuxtLink 
      to="/about" 
      class="text-theme-fg font-medium hover:text-theme-accent transition-colors"
      active-class="text-theme-accent border-b-2 border-theme-accent"
    >
      About/Portfolio
    </NuxtLink>
    <NuxtLink 
      to="/blog" 
      class="text-theme-fg font-medium hover:text-theme-accent transition-colors"
      active-class="text-theme-accent border-b-2 border-theme-accent"
    >
      Blog
    </NuxtLink>
  </nav>
</template>
