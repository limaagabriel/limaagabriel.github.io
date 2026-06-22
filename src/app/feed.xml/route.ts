import { Feed } from 'feed'
import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? ''

const author = {
	name: 'Spencer Sharp',
	email: 'spencer@planetaria.tech',
}

export async function GET() {
	const feed = new Feed({
		title: author.name,
		description: 'Your blog description',
		author,
		id: siteUrl,
		link: siteUrl,
		image: `${siteUrl}/favicon.ico`,
		favicon: `${siteUrl}/favicon.ico`,
		copyright: `All rights reserved ${new Date().getFullYear()}`,
		feedLinks: {
			rss2: `${siteUrl}/feed.xml`,
		},
	})

	const articles = await getAllArticles('en-US')

	for (const article of articles) {
		feed.addItem({
			title: article.title,
			id: `${siteUrl}/en-US/articles/${article.slug}`,
			link: `${siteUrl}/en-US/articles/${article.slug}`,
			description: article.description,
			author: [author],
			contributor: [author],
			date: new Date(article.date),
		})
	}

	return new Response(feed.rss2(), {
		status: 200,
		headers: {
			'content-type': 'application/xml',
		},
	})
}
