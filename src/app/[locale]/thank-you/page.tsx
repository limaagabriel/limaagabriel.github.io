import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('thankYou.title'), description: t('thankYou.description') }
}

export default async function ThankYou({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations('thankYou')

	return <SimpleLayout title={t('title')} intro={t('intro')} />
}
