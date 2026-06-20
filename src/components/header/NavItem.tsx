import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export interface NavItemProps {
	href: string
	children: React.ReactNode
}

export function NavItem({ href, children }: NavItemProps) {
	let isActive = usePathname() === href

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					'relative block px-3 py-2 transition',
					isActive
						? 'text-primary-500 dark:text-primary-400'
						: 'hover:text-primary-500 dark:hover:text-primary-400',
				)}
			>
				{children}
				{isActive && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0" />
				)}
			</Link>
		</li>
	)
}
