import { type Metadata } from 'next'
import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Container } from '@/components/Container'
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'
import SocialLink from './_components/SocialLink'
import MailIcon from './_components/MailIcon'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	let { locale } = await params
	let t = await getTranslations({ locale, namespace: 'metadata' })
	return { title: t('about.title'), description: t('about.description') }
}

export default async function About({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	let { locale } = await params
	setRequestLocale(locale)
	let t = await getTranslations('about')
	let social = await getTranslations('social')

	return (
		<Container className="mt-16 sm:mt-32">
			<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
				<div className="lg:pl-20">
					<div className="max-w-xs px-2.5 lg:max-w-none">
						<Image
							src={portraitImage}
							alt=""
							sizes="(min-width: 1024px) 32rem, 20rem"
							className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
						/>
					</div>
				</div>
				<div className="lg:order-first lg:row-span-2">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						{t('title')}
					</h1>
					<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
						<p>{t('p1')}</p>
						<p>{t('p2')}</p>
						<p>{t('p3')}</p>
						<p>{t('p4')}</p>
					</div>
				</div>
				<div className="lg:pl-20">
					<ul role="list">
						<SocialLink href="#" icon={XIcon}>
							{social('followX')}
						</SocialLink>
						<SocialLink href="#" icon={InstagramIcon} className="mt-4">
							{social('followInstagram')}
						</SocialLink>
						<SocialLink href="#" icon={GitHubIcon} className="mt-4">
							{social('followGitHub')}
						</SocialLink>
						<SocialLink href="#" icon={LinkedInIcon} className="mt-4">
							{social('followLinkedIn')}
						</SocialLink>
						<SocialLink
							href={`mailto:${t('email')}`}
							icon={MailIcon}
							className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
						>
							{t('email')}
						</SocialLink>
					</ul>
				</div>
			</div>
		</Container>
	)
}
