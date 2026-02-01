<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="font-mono text-5xl mb-8 text-theme-fg-emphasis">Blog</h1>
    
    <div v-if="route.query.tag" class="mb-8">
      <p class="text-theme-fg">
        Filtering by tag: <strong class="text-theme-accent">{{ route.query.tag }}</strong>
        <NuxtLink to="/blog" class="ml-4 text-theme-accent hover:text-theme-secondary hover:underline">Clear filter</NuxtLink>
      </p>
    </div>
    
    <div>
      <BlogPostCard
        to="/blog/understanding-vue-composition-api"
        title="Understanding Vue's Composition API"
        date="February 1, 2024"
        tags="vue, javascript, composition-api"
        excerpt="A deep dive into Vue 3's Composition API and how it improves code organization and reusability."
      />

      <BlogPostCard
        to="/blog/typescript-best-practices-vue"
        title="TypeScript Best Practices for Vue Applications"
        date="January 25, 2024"
        tags="typescript, vue, best-practices"
        excerpt="Essential TypeScript patterns and practices for building type-safe Vue.js applications."
      />

      <BlogPostCard
        to="/blog/building-personal-site-with-nuxt-content"
        title="Building a Personal Site with Nuxt Content"
        date="January 20, 2024"
        tags="nuxt, content, blogging, markdown"
        excerpt="Learn how to create a content-driven personal website using Nuxt Content module for managing markdown files."
      />

      <BlogPostCard
        to="/blog/getting-started-with-nuxt"
        title="Getting Started with Nuxt.js"
        date="January 15, 2024"
        tags="nuxt, vue, javascript, web-development"
        excerpt="An introduction to building modern web applications with Nuxt.js, the Vue.js framework."
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Set page title
useHead({
  title: 'Blog - Gabriel Alves'
})
</script>
