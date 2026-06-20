import nextMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
	outputFileTracingIncludes: {
		'/[locale]/articles/[slug]': ['./src/articles/**/*.mdx'],
	},
}

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: ['remark-gfm'],
		rehypePlugins: ['@mapbox/rehype-prism'],
	},
})

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(withMDX(nextConfig))
