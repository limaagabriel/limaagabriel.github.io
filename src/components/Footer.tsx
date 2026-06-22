import { useTranslations } from 'next-intl'

import { ContainerInner, ContainerOuter } from '@/components/Container'
import { NavLink } from '@/components/footer/NavLink'

export function Footer() {
	const nav = useTranslations('nav')
	const footer = useTranslations('footer')

	return (
		<footer className="mt-32 flex-none">
			<ContainerOuter>
				<div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
					<ContainerInner>
						<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
							<div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
								<NavLink href="/about">{nav('about')}</NavLink>
								<NavLink href="/projects">{nav('projects')}</NavLink>
								<NavLink href="/speaking">{nav('speaking')}</NavLink>
								<NavLink href="/uses">{nav('uses')}</NavLink>
							</div>
							<p className="text-sm text-zinc-400 dark:text-zinc-500">
								{footer('rights', { year: new Date().getFullYear() })}
							</p>
						</div>
					</ContainerInner>
				</div>
			</ContainerOuter>
		</footer>
	)
}
