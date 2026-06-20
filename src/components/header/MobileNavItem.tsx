import Link from 'next/link'
import { PopoverButton } from '@headlessui/react'

export interface MobileNavItemProps {
	href: string
	children: React.ReactNode
}

export function MobileNavItem({ href, children }: MobileNavItemProps) {
	return (
		<li>
			<PopoverButton as={Link} href={href} className="block py-2">
				{children}
			</PopoverButton>
		</li>
	)
}
