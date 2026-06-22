'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

import { Link } from '@/i18n/navigation'
import avatarImage from '@/images/avatar.jpeg'

export interface AvatarProps extends Omit<
	React.ComponentPropsWithoutRef<typeof Link>,
	'href'
> {
	large?: boolean
}

export function Avatar({ large = false, className, ...props }: AvatarProps) {
	const t = useTranslations('nav')

	return (
		<Link
			href="/"
			aria-label={t('home')}
			className={clsx(className, 'pointer-events-auto')}
			{...props}
		>
			<Image
				src={avatarImage}
				alt=""
				sizes={large ? '4rem' : '2.25rem'}
				className={clsx(
					'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
					large ? 'h-16 w-16' : 'h-9 w-9',
				)}
				priority
			/>
		</Link>
	)
}
