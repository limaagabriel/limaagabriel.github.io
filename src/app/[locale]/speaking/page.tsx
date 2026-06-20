import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'
import SpeakingSection from './_components/SpeakingSection'
import Appearance from './_components/Appearance'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	let { locale } = await params
	let t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('speaking.title'), description: t('speaking.description') }
}

export default async function Speaking({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	let { locale } = await params
	setRequestLocale(locale)
	let t = await getTranslations('speaking')

	return (
		<SimpleLayout title={t('title')} intro={t('intro')}>
			<div className="space-y-20">
				<SpeakingSection title={t('conferences')}>
					<Appearance
						href="#"
						title={t('appearances.streaming.title')}
						description={t('appearances.streaming.description')}
						event={t('appearances.streaming.event')}
						callToAction={t('watchVideo')}
					/>
					<Appearance
						href="#"
						title={t('appearances.recall.title')}
						description={t('appearances.recall.description')}
						event={t('appearances.recall.event')}
						callToAction={t('watchVideo')}
					/>
				</SpeakingSection>
				<SpeakingSection title={t('podcasts')}>
					<Appearance
						href="#"
						title={t('appearances.design.title')}
						description={t('appearances.design.description')}
						event={t('appearances.design.event')}
						callToAction={t('listenToPodcast')}
					/>
					<Appearance
						href="#"
						title={t('appearances.bootstrapping.title')}
						description={t('appearances.bootstrapping.description')}
						event={t('appearances.bootstrapping.event')}
						callToAction={t('listenToPodcast')}
					/>
					<Appearance
						href="#"
						title={t('appearances.operatingSystem.title')}
						description={t('appearances.operatingSystem.description')}
						event={t('appearances.operatingSystem.event')}
						callToAction={t('listenToPodcast')}
					/>
				</SpeakingSection>
			</div>
		</SimpleLayout>
	)
}
