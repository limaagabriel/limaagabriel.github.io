import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@/components/Button'
import MailIcon from './MailIcon'

function Newsletter() {
	let t = useTranslations('newsletter')
	let locale = useLocale()

	return (
		<form
			action={`/${locale}/thank-you`}
			className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
		>
			<h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
				<MailIcon className="h-6 w-6 flex-none" />
				<span className="ml-3">{t('title')}</span>
			</h2>
			<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
				{t('description')}
			</p>
			<div className="mt-6 flex items-center">
				<span className="flex min-w-0 flex-auto p-px">
					<input
						type="email"
						placeholder={t('emailPlaceholder')}
						aria-label={t('emailLabel')}
						required
						className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-primary-500/10 focus:outline-primary-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-primary-400/10 dark:focus:outline-primary-400"
					/>
				</span>
				<Button type="submit" className="ml-4 flex-none">
					{t('join')}
				</Button>
			</div>
		</form>
	)
}

export default Newsletter
