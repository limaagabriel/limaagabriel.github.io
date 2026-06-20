import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'
import ArrowDownIcon from './ArrowDownIcon'
import BriefcaseIcon from './BriefcaseIcon'
import Role, { type Role as RoleType } from './Role'
import logoLiferay from '@/images/logos/liferay.png'
import logoImogen from '@/images/logos/imogen.png'
import logoBtgPactual from '@/images/logos/btg-pactual.png'
import logoPickcells from '@/images/logos/pickcells.png'

function Resume() {
  let t = useTranslations('resume')
  let present = {
    label: t('present'),
    dateTime: new Date().getFullYear().toString(),
  }

  let resume: Array<RoleType> = [
    {
      company: 'Liferay',
      title: t('roles.liferay'),
      logo: logoLiferay,
      start: '2025',
      end: present,
    },
    {
      company: 'Imogen',
      title: t('roles.imogen'),
      logo: logoImogen,
      start: '2024',
      end: present,
    },
    {
      company: 'BTG Pactual',
      title: t('roles.btg'),
      logo: logoBtgPactual,
      start: '2020',
      end: '2025',
    },
    {
      company: 'Pickcells',
      title: t('roles.pickcells'),
      logo: logoPickcells,
      start: '2018',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">{t('work')}</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        {t('downloadCv')}
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default Resume
