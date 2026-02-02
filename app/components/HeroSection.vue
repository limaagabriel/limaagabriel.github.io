<template>
  <section class="min-h-[80vh] flex flex-col justify-center items-center text-center border-b-2 border-theme-accent px-8 py-16 bg-gradient-to-br from-theme-bg via-theme-bg to-theme-bg-alt relative overflow-hidden">
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-10 left-10 w-32 h-32 bg-theme-accent rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-theme-highlight rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-theme-secondary rounded-full blur-3xl"></div>
    </div>
    <div class="relative z-10">
      <h1 class="font-mono text-6xl md:text-7xl mb-6 text-theme-accent drop-shadow-lg">
        {{ title }}
      </h1>
      <p class="max-w-2xl text-xl leading-relaxed text-theme-fg">
        <slot />
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
