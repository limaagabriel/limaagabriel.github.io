'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import usePrevious from './_components/usePrevious'
import ThemeWatcher from './_components/ThemeWatcher'
import { AppContext } from './_components/AppContext'

export function Providers({ children }: { children: React.ReactNode }) {
	let pathname = usePathname()
	let previousPathname = usePrevious(pathname)

	return (
		<AppContext.Provider value={{ previousPathname }}>
			<ThemeProvider attribute="class" disableTransitionOnChange>
				<ThemeWatcher />
				{children}
			</ThemeProvider>
		</AppContext.Provider>
	)
}
