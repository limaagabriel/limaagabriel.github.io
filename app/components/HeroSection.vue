<template>
  <section class="min-h-[80vh] flex flex-col justify-center items-center text-center border-b-2 border-theme-border px-8 py-16">
    <h1 class="font-mono text-6xl md:text-7xl mb-6 text-theme-fg-emphasis">
      {{ title }}
    </h1>
    <p class="max-w-2xl text-xl leading-relaxed text-theme-fg">
      <slot />
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
