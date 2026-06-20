import { Card } from '@/components/Card'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

interface ArticleProps {
	article: ArticleWithSlug
}

function Article({ article }: ArticleProps) {
	return (
		<Card as="article">
			<Card.Title href={`/articles/${article.slug}`}>
				{article.title}
			</Card.Title>
			<Card.Eyebrow as="time" dateTime={article.date} decorate>
				{formatDate(article.date)}
			</Card.Eyebrow>
			<Card.Description>{article.description}</Card.Description>
			<Card.CallToAction>Read article</Card.CallToAction>
		</Card>
	)
}

export type { ArticleProps }
export default Article
