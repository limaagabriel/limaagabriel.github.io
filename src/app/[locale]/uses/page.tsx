import { type Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { SimpleLayout } from '@/components/SimpleLayout'
import ToolsSection from './_components/ToolsSection'
import Tool from './_components/Tool'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('uses.title'), description: t('uses.description') }
}

export default async function Uses({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations('uses')

	return (
		<SimpleLayout title={t('title')} intro={t('intro')}>
			<div className="space-y-20">
				<ToolsSection title={t('sections.workstation')}>
					<Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
						{t('tools.macbook')}
					</Tool>
					<Tool title="Apple Pro Display XDR (Standard Glass)">
						{t('tools.display')}
					</Tool>
					<Tool title="IBM Model M SSK Industrial Keyboard">
						{t('tools.keyboard')}
					</Tool>
					<Tool title="Apple Magic Trackpad">{t('tools.trackpad')}</Tool>
					<Tool title="Herman Miller Aeron Chair">{t('tools.chair')}</Tool>
				</ToolsSection>
				<ToolsSection title={t('sections.devTools')}>
					<Tool title="Sublime Text 4">{t('tools.sublime')}</Tool>
					<Tool title="iTerm2">{t('tools.iterm')}</Tool>
					<Tool title="TablePlus">{t('tools.tableplus')}</Tool>
				</ToolsSection>
				<ToolsSection title={t('sections.design')}>
					<Tool title="Figma">{t('tools.figma')}</Tool>
				</ToolsSection>
				<ToolsSection title={t('sections.productivity')}>
					<Tool title="Alfred">{t('tools.alfred')}</Tool>
					<Tool title="Reflect">{t('tools.reflect')}</Tool>
					<Tool title="SavvyCal">{t('tools.savvycal')}</Tool>
					<Tool title="Focus">{t('tools.focus')}</Tool>
				</ToolsSection>
			</div>
		</SimpleLayout>
	)
}
