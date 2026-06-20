import { Card } from '@/components/Card'

interface AppearanceProps {
	title: string
	description: string
	event: string
	callToAction: string
	href: string
}

function Appearance({
	title,
	description,
	event,
	callToAction,
	href,
}: AppearanceProps) {
	return (
		<Card as="article">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Eyebrow decorate>{event}</Card.Eyebrow>
			<Card.Description>{description}</Card.Description>
			<Card.CallToAction>{callToAction}</Card.CallToAction>
		</Card>
	)
}

export type { AppearanceProps }
export default Appearance
