<template>
  <article class="border-l-3 border-theme-accent pl-6 mb-8">
    <h3 class="font-mono text-2xl mt-0 mb-2 text-theme-fg-emphasis">
      <NuxtLink :to="to" class="text-theme-accent hover:text-theme-secondary hover:underline transition-colors">
        {{ title }}
      </NuxtLink>
    </h3>
    <div class="text-sm text-theme-fg mb-2 font-mono">
      {{ date }} <span v-if="tags">· {{ tags }}</span>
    </div>
    <p class="text-theme-fg">{{ excerpt }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  title: string
  date: string
  tags?: string
  excerpt: string
}>()
</script>
