<template>
  <div class="container">
    <h1>Blog</h1>
    
    <div v-if="route.query.tag" style="margin-bottom: 2rem;">
      <p>
        Filtering by tag: <strong>{{ route.query.tag }}</strong>
        <NuxtLink to="/blog" style="margin-left: 1rem;">Clear filter</NuxtLink>
      </p>
    </div>
    
    <div v-if="filteredPosts && filteredPosts.length > 0" class="blog-posts">
      <article v-for="post in filteredPosts" :key="post._path" class="post-item">
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
    
    <p v-else>
      {{ route.query.tag ? 'No posts found with this tag.' : 'No blog posts yet. Check back soon!' }}
    </p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// Query all blog posts
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('content')
    .where('_path', 'startsWith', '/blog/')
    .sort({ date: -1 })
    .all()
})

// Filter posts by tag if specified
const filteredPosts = computed(() => {
  if (!posts.value) return []
  
  const tagFilter = route.query.tag as string
  if (!tagFilter) return posts.value
  
  return posts.value.filter(post => 
    post.tags && post.tags.includes(tagFilter)
  )
})

const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Set page title
useHead({
  title: 'Blog - Gabriel Alves'
})
</script>
