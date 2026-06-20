import { Button } from '@/components/Button'
import ArrowDownIcon from './ArrowDownIcon'
import BriefcaseIcon from './BriefcaseIcon'
import Role, { type Role as RoleType } from './Role'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

function Resume() {
  let resume: Array<RoleType> = [
    {
      company: 'Liferay',
      title: 'Software Engineer',
      logo: logoPlanetaria,
      start: '2025',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Imogen',
      title: 'Co-founder',
      logo: logoPlanetaria,
      start: '2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'BTG Pactual',
      title: 'Software Engineer',
      logo: logoAirbnb,
      start: '2020',
      end: '2025',
    },
    {
      company: 'Pickcells',
      title: 'Software Engineer',
      logo: logoFacebook,
      start: '2018',
      end: '2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default Resume
