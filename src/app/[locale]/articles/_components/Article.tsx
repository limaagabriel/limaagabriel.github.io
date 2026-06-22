import { useLocale, useTranslations } from 'next-intl'

import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

interface ArticleProps {
	article: ArticleWithSlug
}

function Article({ article }: ArticleProps) {
	const t = useTranslations('articles')
	const locale = useLocale()

	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline">
			<Card className="md:col-span-3">
				<Card.Title href={`/articles/${article.slug}`}>
					{article.title}
				</Card.Title>
				<Card.Eyebrow
					as="time"
					dateTime={article.date}
					className="md:hidden"
					decorate
				>
					{formatDate(article.date, locale)}
				</Card.Eyebrow>
				<Card.Description>{article.description}</Card.Description>
				<Card.CallToAction>{t('readArticle')}</Card.CallToAction>
			</Card>
			<Card.Eyebrow
				as="time"
				dateTime={article.date}
				className="mt-1 max-md:hidden"
			>
				{formatDate(article.date, locale)}
			</Card.Eyebrow>
		</article>
	)
}

export type { ArticleProps }
export default Article
