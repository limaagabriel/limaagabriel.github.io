import { type Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { getArticleSlugs } from '@/lib/articles'
import { routing } from '@/i18n/routing'

export async function generateStaticParams() {
	const slugs = await getArticleSlugs()
	return routing.locales.flatMap((locale) =>
		slugs.map((slug) => ({ locale, slug })),
	)
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
	const { locale, slug } = await params
	const { article } = await import(`../../../../articles/${slug}/${locale}.mdx`)
	return { title: article.title, description: article.description }
}

export default async function ArticlePage({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>
}) {
	const { locale, slug } = await params
	setRequestLocale(locale)
	const { default: Article } = await import(
		`../../../../articles/${slug}/${locale}.mdx`
	)
	return <Article />
}
