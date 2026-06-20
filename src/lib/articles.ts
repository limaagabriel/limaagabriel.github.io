import glob from 'fast-glob'

interface Article {
	title: string
	description: string
	author: string
	date: string
}

export interface ArticleWithSlug extends Article {
	slug: string
}

async function importArticle(
	slug: string,
	locale: string,
): Promise<ArticleWithSlug> {
	let { article } = (await import(`../articles/${slug}/${locale}.mdx`)) as {
		default: React.ComponentType
		article: Article
	}

	return { slug, ...article }
}

export async function getArticleSlugs() {
	let files = await glob('*/en-US.mdx', { cwd: './src/articles' })
	return files.map((file) => file.split('/')[0])
}

export async function getAllArticles(locale: string) {
	let slugs = await getArticleSlugs()
	let articles = await Promise.all(
		slugs.map((slug) => importArticle(slug, locale)),
	)

	return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
