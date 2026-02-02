<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="font-mono text-5xl mb-8 text-theme-fg-emphasis">About Me</h1>
    
    <section class="mb-12">
      <p class="mb-4 text-theme-fg text-lg leading-relaxed">
        Hi! I'm Gabriel Lima, a software developer with a passion for creating elegant and 
        efficient solutions. I specialize in web development and enjoy working with modern 
        technologies like Nuxt.js, Vue.js, and TypeScript.
      </p>
      
      <p class="text-theme-fg text-lg leading-relaxed">
        When I'm not coding, you can find me exploring new technologies, contributing to 
        open-source projects, or writing about my experiences on this blog.
      </p>
    </section>

    <h2 class="font-mono text-4xl mb-8 text-theme-fg-emphasis">Portfolio</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard
        title="Personal Website"
        description="A modern, static personal website built with Nuxt.js and Nuxt Content. Features a blog, portfolio gallery, and multiple theme options."
        :tags="['nuxt', 'vue', 'typescript']"
        link="/blog?tag=nuxt"
      />

      <ProjectCard
        title="Task Management App"
        description="A full-stack task management application with real-time updates, user authentication, and collaborative features."
        :tags="['vue', 'nodejs', 'mongodb']"
        link="/blog?tag=vue"
      />

      <ProjectCard
        title="API Integration Library"
        description="A TypeScript library for simplifying API integrations with built-in retry logic, caching, and error handling."
        :tags="['typescript', 'library', 'api']"
        link="/blog?tag=typescript"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'About & Portfolio - Gabriel Lima'
})
</script>
