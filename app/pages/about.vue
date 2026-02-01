<template>
  <div class="container">
    <h1>About Me</h1>
    
    <section>
      <p>
        Hi! I'm Gabriel Alves, a software developer with a passion for creating elegant and 
        efficient solutions. I specialize in web development and enjoy working with modern 
        technologies like Nuxt.js, Vue.js, and TypeScript.
      </p>
      
      <p>
        When I'm not coding, you can find me exploring new technologies, contributing to 
        open-source projects, or writing about my experiences on this blog.
      </p>
    </section>

    <h2>Portfolio</h2>
    
    <div class="portfolio-gallery">
      <!-- Project 1 -->
      <div class="project-card">
        <h3>Personal Website</h3>
        <p>
          A modern, static personal website built with Nuxt.js and Nuxt Content. 
          Features a blog, portfolio gallery, and multiple theme options.
        </p>
        <div class="project-tags">
          <span class="tag">nuxt</span>
          <span class="tag">vue</span>
          <span class="tag">typescript</span>
        </div>
        <p style="margin-top: 1rem;">
          <NuxtLink to="/blog?tag=nuxt">View related posts →</NuxtLink>
        </p>
      </div>

      <!-- Project 2 -->
      <div class="project-card">
        <h3>Task Management App</h3>
        <p>
          A full-stack task management application with real-time updates, 
          user authentication, and collaborative features.
        </p>
        <div class="project-tags">
          <span class="tag">vue</span>
          <span class="tag">nodejs</span>
          <span class="tag">mongodb</span>
        </div>
        <p style="margin-top: 1rem;">
          <NuxtLink to="/blog?tag=vue">View related posts →</NuxtLink>
        </p>
      </div>

      <!-- Project 3 -->
      <div class="project-card">
        <h3>API Integration Library</h3>
        <p>
          A TypeScript library for simplifying API integrations with built-in 
          retry logic, caching, and error handling.
        </p>
        <div class="project-tags">
          <span class="tag">typescript</span>
          <span class="tag">library</span>
          <span class="tag">api</span>
        </div>
        <p style="margin-top: 1rem;">
          <NuxtLink to="/blog?tag=typescript">View related posts →</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'About & Portfolio - Gabriel Alves'
})
</script>
