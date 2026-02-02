import { validateBlogPost, type BlogPost } from '~/utils/content-schema'

interface BlogPostWithPath extends BlogPost {
  _path: string
}

export const useBlogPosts = async (limit?: number) => {
  const { data: posts } = await useAsyncData('blog-posts', async () => {
    try {
      const files = await queryContent('blog').find()
      
      const validatedPosts = files.map((post: any) => {
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
          }
        } catch (error) {
          console.error(`Validation failed for post at ${post._path}:`, error)
          throw new Error(`Blog post validation failed for ${post._path}. ${error}`)
        }
      })
      
      return validatedPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }
  })

  const limitedPosts = computed(() => {
    if (!posts.value) return []
    if (limit) return posts.value.slice(0, limit)
    return posts.value
  })

  return { posts: limitedPosts }
}

export const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
