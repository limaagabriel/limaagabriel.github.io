import { useTranslations } from 'next-intl'

import { NavItem } from '@/components/header/NavItem'

export interface DesktopNavigationProps extends React.ComponentPropsWithoutRef<'nav'> {}

export function DesktopNavigation(props: DesktopNavigationProps) {
	const t = useTranslations('nav')

	return (
		<nav {...props}>
			<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
				<NavItem href="/about">{t('about')}</NavItem>
				<NavItem href="/articles">{t('articles')}</NavItem>
				<NavItem href="/projects">{t('projects')}</NavItem>
				<NavItem href="/speaking">{t('speaking')}</NavItem>
				<NavItem href="/uses">{t('uses')}</NavItem>
			</ul>
		</nav>
	)
}
