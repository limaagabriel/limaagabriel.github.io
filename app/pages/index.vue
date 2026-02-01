<template>
  <div>
    <!-- Full Page Intro -->
    <section class="full-page-intro">
      <h1>Gabriel Alves</h1>
      <p>
        Software developer passionate about building elegant solutions to complex problems. 
        I enjoy working with modern web technologies, exploring new frameworks, and sharing 
        my experiences through writing.
      </p>
    </section>

    <!-- Recent Blog Posts -->
    <section class="blog-posts container">
      <h2>Recent Blog Posts</h2>
      
      <div>
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
    </section>
  </div>
</template>

