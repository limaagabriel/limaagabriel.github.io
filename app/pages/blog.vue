<template>
  <div class="max-w-7xl mx-auto">
    <h1 class="font-mono text-5xl mb-8 text-theme-fg-emphasis">Blog</h1>
    
    <div v-if="route.query.tag" class="mb-8">
      <p class="text-theme-fg">
        Filtering by tag: <strong class="text-theme-accent">{{ route.query.tag }}</strong>
        <NuxtLink to="/blog" class="ml-4 text-theme-accent hover:text-theme-secondary hover:underline">Clear filter</NuxtLink>
      </p>
    </div>
    
    <div v-if="filteredPosts && filteredPosts.length > 0">
      <BlogPostCard
        v-for="post in filteredPosts"
        :key="post._path"
        :to="post._path"
        :title="post.title"
        :date="formatDate(post.date)"
        :tags="post.tags.join(', ')"
        :excerpt="post.description"
      />
    </div>
    
    <p v-else class="text-theme-fg">
      {{ route.query.tag ? 'No posts found with this tag.' : 'No blog posts yet. Check back soon!' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { validateBlogPost } from '~/utils/content-schema'

const route = useRoute()

const { data: allPosts } = await useAsyncData('blog-posts', () => queryContent('blog').find())

const posts = computed(() => {
  if (!allPosts.value) return []
  
  try {
    const validatedPosts = allPosts.value.map((post: any) => {
      const validated = validateBlogPost({
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
      })
      return {
        ...validated,
        _path: post._path,
      }
    })
    
    return validatedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error validating posts:', error)
    return []
  }
})

const filteredPosts = computed(() => {
  if (!posts.value) return []
  
  const tagFilter = route.query.tag as string
  if (!tagFilter) return posts.value
  
  return posts.value.filter(post => 
    post.tags && post.tags.includes(tagFilter)
  )
})

useHead({
  title: 'Blog - Gabriel Lima'
})
</script>
