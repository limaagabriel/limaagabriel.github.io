import { validateBlogPost, type BlogPost } from '~/utils/content-schema'

interface BlogPostWithPath extends BlogPost {
  _path: string
  body: any
}

export const useBlogPosts = async (limit?: number) => {
  const allPosts = ref<BlogPostWithPath[]>([])
  
  try {
    const contentQuery = await $fetch<any[]>('/api/_content/query?_path=/blog')
    
    const validatedPosts = contentQuery.map((post) => {
      try {
        const validated = validateBlogPost({
          title: post.title,
          description: post.description,
          date: post.date,
          tags: post.tags,
        })
        
        return {
          ...validated,
          _path: post._path,
          body: post.body,
        }
      } catch (error) {
        console.error(`Validation failed for post at ${post._path}:`, error)
        throw new Error(`Blog post validation failed for ${post._path}. ${error}`)
      }
    })
    
    allPosts.value = validatedPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    allPosts.value = []
  }

  const posts = computed(() => {
    if (limit) return allPosts.value.slice(0, limit)
    return allPosts.value
  })

  return { posts }
}

export const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
