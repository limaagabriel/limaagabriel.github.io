import { type Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Gabriel Lima',
    default: 'Gabriel Lima - Software engineering',
  },
  description:
    "I'm Gabriel, a software engineer and entrepeneur based in Recife. I'm focused on delivering technology while focusing on self-improvement.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(lexendDeca.variable, 'h-full antialiased')}
      suppressHydrationWarning
    >
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
