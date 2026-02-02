<script setup lang="ts">
const route = useRoute()

// Fetch the content for the current path
const { data: page } = await useAsyncData(`content-${route.path}`, () => {
  // Use fetchContentNavigation or direct file reading
  return $fetch(`/api/_content/query?_path=${route.path}`)
    .then((res: any) => res[0])
    .catch(() => null)
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Set page title
useHead({
  title: page.value.title ? `${page.value.title} - Gabriel Lima` : 'Gabriel Lima'
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <article v-if="page">
      <h1 class="font-mono text-5xl mb-4 text-theme-fg-emphasis">{{ page.title }}</h1>
      
      <div v-if="page.date || page.tags" class="text-sm text-theme-fg mb-8 font-mono">
        <span v-if="page.date">{{ new Date(page.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        <span v-if="page.tags"> · {{ page.tags.join(', ') }}</span>
      </div>
      
      <div class="prose prose-lg max-w-none text-theme-fg">
        <ContentRenderer :value="page" />
      </div>
    </article>
  </div>
</template>

<style scoped>
/* Prose styling for markdown content */
:deep(.prose) {
  --tw-prose-body: var(--theme-fg);
  --tw-prose-headings: var(--theme-fg-emphasis);
  --tw-prose-links: var(--theme-accent);
  --tw-prose-code: var(--theme-fg-emphasis);
  --tw-prose-pre-bg: var(--theme-bg-alt);
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4) {
  font-family: 'Iosevka', monospace;
  color: var(--theme-fg-emphasis);
}

:deep(.prose a) {
  color: var(--theme-accent);
  text-decoration: none;
}

:deep(.prose a:hover) {
  color: var(--theme-secondary);
  text-decoration: underline;
}

:deep(.prose code) {
  font-family: 'Iosevka', monospace;
  background-color: var(--theme-bg-alt);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

:deep(.prose pre) {
  background-color: var(--theme-bg-alt);
  border: 1px solid var(--theme-border);
  font-family: 'Iosevka', monospace;
}

:deep(.prose pre code) {
  background-color: transparent;
  padding: 0;
}
</style>
