import Link from 'next/link'

export interface NavLinkProps {
	href: string
	children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
	return (
		<Link
			href={href}
			className="transition hover:text-teal-500 dark:hover:text-teal-400"
		>
			{children}
		</Link>
	)
}
