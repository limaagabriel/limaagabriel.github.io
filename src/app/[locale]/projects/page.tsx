import { type Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import LinkIcon from './_components/LinkIcon'

const projects = [
	{
		key: 'planetaria',
		name: 'Planetaria',
		link: { href: 'http://planetaria.tech', label: 'planetaria.tech' },
		logo: logoPlanetaria,
	},
	{
		key: 'animaginary',
		name: 'Animaginary',
		link: { href: '#', label: 'github.com' },
		logo: logoAnimaginary,
	},
	{
		key: 'helioStream',
		name: 'HelioStream',
		link: { href: '#', label: 'github.com' },
		logo: logoHelioStream,
	},
	{
		key: 'cosmos',
		name: 'cosmOS',
		link: { href: '#', label: 'github.com' },
		logo: logoCosmos,
	},
	{
		key: 'openShuttle',
		name: 'OpenShuttle',
		link: { href: '#', label: 'github.com' },
		logo: logoOpenShuttle,
	},
]

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	let { locale } = await params
	let t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('projects.title'), description: t('projects.description') }
}

export default async function Projects({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	let { locale } = await params
	setRequestLocale(locale)
	let t = await getTranslations('projects')

	return (
		<SimpleLayout title={t('title')} intro={t('intro')}>
			<ul
				role="list"
				className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<Card as="li" key={project.key}>
						<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
							<Image
								src={project.logo}
								alt=""
								className="h-8 w-8"
								unoptimized
							/>
						</div>
						<h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
							<Card.Link href={project.link.href}>{project.name}</Card.Link>
						</h2>
						<Card.Description>{t(`items.${project.key}`)}</Card.Description>
						<p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-primary-500 dark:text-zinc-200">
							<LinkIcon className="h-6 w-6 flex-none" />
							<span className="ml-2">{project.link.label}</span>
						</p>
					</Card>
				))}
			</ul>
		</SimpleLayout>
	)
}
