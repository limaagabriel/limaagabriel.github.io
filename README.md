# Gabriel Lima - Personal Website

A modern, static personal website built with Nuxt.js featuring a blog, portfolio, and multiple theme options.

## Features

- **Three Pages:**
  - **Home Page**: Full-page intro with name and bio, plus recent blog posts
  - **About/Portfolio Page**: Detailed "About Me" section with project gallery
  - **Blog Page**: List of blog posts written in Markdown

- **Styling:**
  - **Fonts**: Iosevka (monospace) for titles, Lexend Deca (sans-serif) for text
  - **Theme Selector**: Switch between Solarized Light (default), Solarized Dark, Monomania, and GitHub Light themes
  - **Text-editor aesthetic**: Clean, minimalist design inspired by code editors

- **Technical Stack:**
  - Nuxt.js 4 with static site generation
  - Nuxt Content module for markdown blog posts
  - TypeScript for type safety
  - No backend - fully static for GitHub Pages hosting

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
# Generate static site
npm run generate
```

The static files will be generated in the `.output/public` directory.

### Preview Production Build

```bash
# Build and preview
npm run build
npm run preview
```

## Project Structure

```
.
├── app/
│   ├── layouts/
│   │   └── default.vue      # Main layout with navigation and theme selector
│   ├── pages/
│   │   ├── index.vue        # Home page
│   │   ├── about.vue        # About/Portfolio page
│   │   ├── blog.vue         # Blog listing page
│   │   └── [...slug].vue    # Dynamic page/blog post renderer
│   └── app.vue              # Root component
├── assets/
│   └── css/
│       └── main.css         # Global styles and theme variables
├── content/
│   └── blog/                # Blog posts in markdown format
├── public/                  # Static assets
├── nuxt.config.ts          # Nuxt configuration
└── package.json
```

## Creating Blog Posts

Blog posts are markdown files stored in `content/blog/`. Each post should include frontmatter with metadata:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: "2024-01-15"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Title

Your content here...
```

## Themes

The site includes four themes:

1. **Solarized Light** (default) - Easy on the eyes with warm tones
2. **Solarized Dark** - Dark version of Solarized
3. **Monomania** - High contrast green-on-black terminal style
4. **GitHub Light** - Clean, familiar GitHub aesthetic

Theme preference is saved in localStorage and persists across sessions.

## Deployment to GitHub Pages

### Automatic Deployment (GitHub Actions)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run generate
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .output/public
```

2. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Manual Deployment

```bash
# Generate static site
npm run generate

# Deploy the .output/public directory to GitHub Pages
# (Use your preferred deployment method)
```

## Customization

### Changing Personal Information

1. Update the name and bio in `app/pages/index.vue`
2. Update the About section in `app/pages/about.vue`
3. Update projects in the portfolio gallery
4. Modify page titles in `nuxt.config.ts`

### Adding New Themes

1. Add theme variables in `assets/css/main.css`
2. Add theme option in `app/layouts/default.vue`

### Modifying Styles

- Global styles and theme variables: `assets/css/main.css`
- Component-specific styles: Use `<style scoped>` in Vue components

## License

MIT License - feel free to use this as a template for your own site!

## Credits

- Built with [Nuxt.js](https://nuxt.com/)
- Content management by [Nuxt Content](https://content.nuxt.com/)
- Fonts: [Iosevka](https://github.com/be5invis/Iosevka) and [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
- Themes inspired by [Solarized](https://ethanschoonover.com/solarized/) and [GitHub](https://github.com/)
