import { type Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import clsx from 'clsx'

import { Providers } from './providers'
import { Layout } from '@/components/Layout'
import { routing } from '@/i18n/routing'

import '@/styles/tailwind.css'

const lexendDeca = Lexend_Deca({
	subsets: ['latin'],
	variable: '--font-lexend-deca',
})

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'metadata' })

	return {
		title: {
			template: '%s - Gabriel Lima',
			default: t('home.title'),
		},
		description: t('home.description'),
		alternates: {
			types: {
				'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
			},
		},
	}
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	setRequestLocale(locale)

	return (
		<html
			lang={locale}
			className={clsx(lexendDeca.variable, 'h-full antialiased')}
			suppressHydrationWarning
		>
			<body className="flex h-full bg-zinc-50 dark:bg-black">
				<NextIntlClientProvider>
					<Providers>
						<div className="flex w-full">
							<Layout>{children}</Layout>
						</div>
					</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
