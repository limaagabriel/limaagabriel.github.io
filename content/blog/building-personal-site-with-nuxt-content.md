---
title: "Building a Personal Site with Nuxt Content"
description: "Learn how to create a content-driven personal website using Nuxt Content module for managing markdown files."
date: "2024-01-20"
tags: ["nuxt", "content", "blogging", "markdown"]
---

# Building a Personal Site with Nuxt Content

Creating a personal website is a great way to showcase your work and share your thoughts. With Nuxt Content, you can build a content-driven site that's easy to maintain and deploy.

## What is Nuxt Content?

Nuxt Content is a file-based CMS for Nuxt applications. It allows you to write your content in Markdown files and query them like a database. It's perfect for blogs, documentation sites, and portfolios.

## Setting Up Nuxt Content

First, install the module:

```bash
npm install @nuxt/content
```

Then add it to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/content']
})
```

## Creating Content

Create a `content` directory in your project root and add markdown files:

```
content/
  blog/
    post-1.md
    post-2.md
  about.md
```

Each markdown file can have frontmatter with metadata:

```markdown
---
title: "My First Post"
description: "This is my first blog post"
date: "2024-01-20"
tags: ["blogging", "writing"]
---

# My First Post

Content goes here...
```

## Querying Content

Nuxt Content provides a powerful query API:

```vue
<script setup>
// Get all blog posts
const { data: posts } = await useAsyncData('posts', () => {
  return queryCollection('content')
    .where('_path', 'startsWith', '/blog/')
    .sort({ date: -1 })
    .all()
})
</script>
```

## Rendering Content

Use the `ContentRenderer` component to render your markdown:

```vue
<template>
  <ContentRenderer :value="page" />
</template>
```

## Benefits

- **No database required**: All content is stored as files in your repository
- **Version control**: Content changes are tracked in git
- **Syntax highlighting**: Code blocks are automatically highlighted
- **Fast builds**: Static generation means fast page loads
- **Developer friendly**: Write in markdown with your favorite editor

## Conclusion

Nuxt Content makes it incredibly easy to build content-driven websites. Whether you're creating a blog, documentation site, or portfolio, it provides all the tools you need while keeping things simple and maintainable.

The combination of Nuxt's powerful features and Content's simplicity creates an excellent developer experience for building static sites.
