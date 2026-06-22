import clsx from 'clsx'

import { CardLink } from '@/components/CardLink'
import { CardTitle } from '@/components/CardTitle'
import { CardDescription } from '@/components/CardDescription'
import { CardCallToAction } from '@/components/CardCallToAction'
import { CardEyebrow } from '@/components/CardEyebrow'

export type { CardLinkProps } from '@/components/CardLink'
export type { CardTitleProps } from '@/components/CardTitle'
export type { CardDescriptionProps } from '@/components/CardDescription'
export type { CardCallToActionProps } from '@/components/CardCallToAction'
export type { CardEyebrowProps } from '@/components/CardEyebrow'

export { CardLink }
export { CardTitle }
export { CardDescription }
export { CardCallToAction }
export { CardEyebrow }

export type CardProps<T extends React.ElementType = 'div'> = Omit<
	React.ComponentPropsWithoutRef<T>,
	'as' | 'className'
> & {
	as?: T
	className?: string
	children?: React.ReactNode
}

export function Card<T extends React.ElementType = 'div'>({
	as,
	className,
	children,
}: CardProps<T>) {
	const Component = as ?? 'div'

	return (
		<Component
			className={clsx(className, 'group relative flex flex-col items-start')}
		>
			{children}
		</Component>
	)
}

Card.Link = CardLink
Card.Title = CardTitle
Card.Description = CardDescription
Card.CallToAction = CardCallToAction
Card.Eyebrow = CardEyebrow
