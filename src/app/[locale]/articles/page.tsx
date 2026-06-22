import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import Article from './_components/Article'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('articles.title'), description: t('articles.description') }
}

export default async function ArticlesIndex({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations('articles')
	const articles = await getAllArticles(locale)

	return (
		<SimpleLayout title={t('title')} intro={t('intro')}>
			<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
				<div className="flex max-w-3xl flex-col space-y-16">
					{articles.map((article) => (
						<Article key={article.slug} article={article} />
					))}
				</div>
			</div>
		</SimpleLayout>
	)
}
