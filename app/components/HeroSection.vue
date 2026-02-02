<template>
  <section class="min-h-[80vh] flex flex-col justify-center items-center text-center border-b-2 border-theme-accent px-8 py-16 bg-theme-bg relative overflow-hidden">
    <div class="absolute inset-0 pattern-container">
      <div class="pattern-grid"></div>
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

<style scoped>
.pattern-container {
  background-color: var(--theme-bg);
}

.pattern-grid {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(to right, var(--theme-accent) 1px, transparent 1px),
    linear-gradient(to bottom, var(--theme-accent) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.1;
  animation: movePattern 20s linear infinite;
}

.pattern-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(45deg, transparent, transparent 10px, var(--theme-highlight) 10px, var(--theme-highlight) 12px),
    repeating-linear-gradient(-45deg, transparent, transparent 10px, var(--theme-secondary) 10px, var(--theme-secondary) 12px);
  background-size: 80px 80px;
  opacity: 0.05;
  animation: movePattern 30s linear infinite reverse;
}

@keyframes movePattern {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}
</style>
