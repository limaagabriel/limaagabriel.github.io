<template>
  <div class="container">
    <h1>Blog</h1>
    
    <div v-if="route.query.tag" style="margin-bottom: 2rem;">
      <p>
        Filtering by tag: <strong>{{ route.query.tag }}</strong>
        <NuxtLink to="/blog" style="margin-left: 1rem;">Clear filter</NuxtLink>
      </p>
    </div>
    
    <div class="blog-posts">
      <article class="post-item">
        <h3>
          <NuxtLink to="/blog/understanding-vue-composition-api">Understanding Vue's Composition API</NuxtLink>
        </h3>
        <div class="post-meta">
          February 1, 2024 · vue, javascript, composition-api
        </div>
        <p class="post-excerpt">A deep dive into Vue 3's Composition API and how it improves code organization and reusability.</p>
      </article>

      <article class="post-item">
        <h3>
          <NuxtLink to="/blog/typescript-best-practices-vue">TypeScript Best Practices for Vue Applications</NuxtLink>
        </h3>
        <div class="post-meta">
          January 25, 2024 · typescript, vue, best-practices
        </div>
        <p class="post-excerpt">Essential TypeScript patterns and practices for building type-safe Vue.js applications.</p>
      </article>

      <article class="post-item">
        <h3>
          <NuxtLink to="/blog/building-personal-site-with-nuxt-content">Building a Personal Site with Nuxt Content</NuxtLink>
        </h3>
        <div class="post-meta">
          January 20, 2024 · nuxt, content, blogging, markdown
        </div>
        <p class="post-excerpt">Learn how to create a content-driven personal website using Nuxt Content module for managing markdown files.</p>
      </article>

      <article class="post-item">
        <h3>
          <NuxtLink to="/blog/getting-started-with-nuxt">Getting Started with Nuxt.js</NuxtLink>
        </h3>
        <div class="post-meta">
          January 15, 2024 · nuxt, vue, javascript, web-development
        </div>
        <p class="post-excerpt">An introduction to building modern web applications with Nuxt.js, the Vue.js framework.</p>
      </article>
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
