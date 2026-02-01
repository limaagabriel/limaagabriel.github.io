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
      
      <div v-if="posts && posts.length > 0">
        <article v-for="post in posts" :key="post._path" class="post-item">
          <h3>
            <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
          </h3>
          <div class="post-meta">
            {{ formatDate(post.date) }}
            <span v-if="post.tags"> · {{ post.tags.join(', ') }}</span>
          </div>
          <p class="post-excerpt">{{ post.description }}</p>
        </article>
      </div>
      
      <p v-else>No blog posts yet. Check back soon!</p>
    </section>
  </div>
</template>

<script setup lang="ts">
// Query recent blog posts
const { data: posts } = await useAsyncData('home-posts', () => {
  return queryCollection('content')
    .where('_path', 'startsWith', '/blog/')
    .sort({ date: -1 })
    .limit(5)
    .all()
})

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
