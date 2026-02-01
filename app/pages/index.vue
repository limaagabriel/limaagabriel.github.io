<template>
  <div>
    <!-- Full Page Intro -->
    <HeroSection title="Gabriel Alves">
      Software developer passionate about building elegant solutions to complex problems. 
      I enjoy working with modern web technologies, exploring new frameworks, and sharing 
      my experiences through writing.
    </HeroSection>

    <!-- Recent Blog Posts -->
    <section class="max-w-7xl mx-auto px-8 py-12">
      <h2 class="font-mono text-4xl mb-8 text-theme-fg-emphasis">Recent Blog Posts</h2>
      
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
    </section>
  </div>
</template>
