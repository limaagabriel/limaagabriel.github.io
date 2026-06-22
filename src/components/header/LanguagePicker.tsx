'use client'

import { Fragment } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import clsx from 'clsx'

import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

export function LanguagePicker() {
	const pathname = usePathname()
	const active = useLocale()
	const t = useTranslations('languagePicker')

	return (
		<div
			aria-label={t('label')}
			className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-zinc-600 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10"
		>
			{routing.locales.map((locale, index) => (
				<Fragment key={locale}>
					{index > 0 && (
						<span className="text-zinc-300 dark:text-zinc-600">/</span>
					)}
					<Link
						href={pathname}
						locale={locale}
						className={clsx(
							'transition',
							locale === active
								? 'text-primary-500 dark:text-primary-400'
								: 'hover:text-primary-500 dark:hover:text-primary-400',
						)}
					>
						{t(locale === 'en-US' ? 'en' : 'pt')}
					</Link>
				</Fragment>
			))}
		</div>
	)
}
