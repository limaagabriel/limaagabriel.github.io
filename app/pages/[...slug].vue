<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Set page title
useHead({
  title: page.value.title ? `${page.value.title} - Gabriel Alves` : 'Gabriel Alves'
})
</script>

<template>
  <div class="container">
    <article v-if="page">
      <h1>{{ page.title }}</h1>
      
      <div v-if="page.date || page.tags" class="post-meta" style="margin-bottom: 2rem;">
        <span v-if="page.date">{{ new Date(page.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
        <span v-if="page.tags"> · {{ page.tags.join(', ') }}</span>
      </div>
      
      <ContentRenderer :value="page" />
    </article>
  </div>
</template>

<style scoped>
article {
  max-width: 800px;
}
</style>
