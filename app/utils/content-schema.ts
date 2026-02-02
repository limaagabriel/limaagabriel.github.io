import { z } from 'zod'

export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
})

export type BlogPost = z.infer<typeof blogPostSchema>

export function validateBlogPost(data: unknown): BlogPost {
  return blogPostSchema.parse(data)
}
