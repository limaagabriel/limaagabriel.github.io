import { CardLink } from '@/components/CardLink'

export type CardTitleProps<T extends React.ElementType = 'h2'> =
	Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
		as?: T
		href?: string
		children?: React.ReactNode
	}

export function CardTitle<T extends React.ElementType = 'h2'>({
	as,
	href,
	children,
}: CardTitleProps<T>) {
	let Component = as ?? 'h2'

	return (
		<Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
			{href ? <CardLink href={href}>{children}</CardLink> : children}
		</Component>
	)
}
