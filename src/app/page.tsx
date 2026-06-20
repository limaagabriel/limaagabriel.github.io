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

export default async function Home() {
	let articles = (await getAllArticles()).slice(0, 4)

	return (
		<>
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
						Software designer, founder, and amateur astronaut.
					</h1>
					<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
						I've been a software designer and entrepreneur based in New York
						City. I've been the founder and CEO of Planetaria, where we develop
						technologies that empower regular people to explore space on their
						own terms.
					</p>
					<div className="mt-6 flex gap-6">
						<SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
						<SocialLink
							href="#"
							aria-label="Follow on Instagram"
							icon={InstagramIcon}
						/>
						<SocialLink
							href="#"
							aria-label="Follow on GitHub"
							icon={GitHubIcon}
						/>
						<SocialLink
							href="#"
							aria-label="Follow on LinkedIn"
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
