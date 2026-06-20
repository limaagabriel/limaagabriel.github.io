import { getTranslations, setRequestLocale } from 'next-intl/server'

import { Container } from '@/components/Container'
import {
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
	XIcon,
} from '@/components/SocialIcons'
import { getAllArticles } from '@/lib/articles'
import SocialLink from './_components/SocialLink'
import Article from './_components/Article'
import Newsletter from './_components/Newsletter'
import Resume from './_components/Resume'
import Photos from './_components/Photos'

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>
}) {
	let { locale } = await params
	setRequestLocale(locale)
	let t = await getTranslations('home')
	let social = await getTranslations('social')
	let articles = (await getAllArticles(locale)).slice(0, 4)

	return (
		<>
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						{t('title')}
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						{t('intro')}
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink href="#" aria-label={social('followX')} icon={XIcon} />
						<SocialLink
							href="#"
							aria-label={social('followInstagram')}
							icon={InstagramIcon}
						/>
						<SocialLink
							href="#"
							aria-label={social('followGitHub')}
							icon={GitHubIcon}
						/>
						<SocialLink
							href="#"
							aria-label={social('followLinkedIn')}
							icon={LinkedInIcon}
						/>
					</div>
				</div>
			</Container>
			<Photos />
			<Container className="mt-24 md:mt-28">
				<div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col gap-16">
						{articles.map((article) => (
							<Article key={article.slug} article={article} />
						))}
					</div>
					<div className="space-y-10 lg:pl-16 xl:pl-24">
						<Newsletter />
						<Resume />
					</div>
				</div>
			</Container>
		</>
	)
}
