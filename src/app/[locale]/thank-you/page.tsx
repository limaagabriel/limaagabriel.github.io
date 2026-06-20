import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	let { locale } = await params
	let t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('thankYou.title'), description: t('thankYou.description') }
}

export default async function ThankYou({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	let { locale } = await params
	setRequestLocale(locale)
	let t = await getTranslations('thankYou')

	return <SimpleLayout title={t('title')} intro={t('intro')} />
}
