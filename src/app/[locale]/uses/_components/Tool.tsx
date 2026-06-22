import { Card } from '@/components/Card'

interface ToolProps {
	title: string
	href?: string
	children: React.ReactNode
}

function Tool({ title, href, children }: ToolProps) {
	return (
		<Card as="li">
			<Card.Title as="h3" href={href}>
				{title}
			</Card.Title>
			<Card.Description>{children}</Card.Description>
		</Card>
	)
}

export type { ToolProps }
export default Tool
