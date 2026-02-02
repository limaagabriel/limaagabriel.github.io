<template>
  <div>
    <HeroSection title="Gabriel Lima">
      Software developer passionate about building elegant solutions to complex problems. 
      I enjoy working with modern web technologies, exploring new frameworks, and sharing 
      my experiences through writing.
    </HeroSection>

    <section class="max-w-7xl mx-auto px-8 py-12">
      <h2 class="font-mono text-4xl mb-8 text-theme-fg-emphasis">Recent Blog Posts</h2>
      
      <div v-if="posts && posts.length > 0">
        <BlogPostCard
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          :title="post.title"
          :date="formatDate(post.date)"
          :tags="post.tags.join(', ')"
          :excerpt="post.description"
        />
        
        <div class="mt-8">
          <NuxtLink 
            to="/blog" 
            class="text-theme-accent hover:text-theme-secondary font-mono text-lg hover:underline"
          >
            View all posts →
          </NuxtLink>
        </div>
      </div>
      
      <p v-else class="text-theme-fg">No blog posts yet. Check back soon!</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const { posts } = useBlogPosts(3)
</script>
