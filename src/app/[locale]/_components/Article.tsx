import { useLocale, useTranslations } from 'next-intl'

import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

interface ArticleProps {
	article: ArticleWithSlug
}

function Article({ article }: ArticleProps) {
	let t = useTranslations('articles')
	let locale = useLocale()

	return (
		<Card as="article">
			<Card.Title href={`/articles/${article.slug}`}>
				{article.title}
			</Card.Title>
			<Card.Eyebrow as="time" dateTime={article.date} decorate>
				{formatDate(article.date, locale)}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.CallToAction>{t('readArticle')}</Card.CallToAction>
		</Card>
	)
}

export type { ArticleProps }
export default Article
