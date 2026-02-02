<template>
  <div class="bg-theme-bg-alt border border-theme-border p-6 transition-transform hover:-translate-y-1 hover:shadow-lg">
    <h3 class="font-mono text-xl mt-0 mb-3 text-theme-fg-emphasis">
      {{ title }}
    </h3>
    <p class="mb-4 text-theme-fg">{{ description }}</p>
    <div class="flex flex-wrap gap-2 mt-4">
      <span 
        v-for="tag in tags" 
        :key="tag"
        class="bg-theme-bg text-theme-accent px-3 py-1 border border-theme-accent text-sm font-mono"
      >
        {{ tag }}
      </span>
    </div>
    <p v-if="link" class="mt-4">
      <NuxtLink :to="link" class="text-theme-accent hover:text-theme-secondary hover:underline transition-colors">
        View related posts →
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags: string[]
  link?: string
}>()
</script>
