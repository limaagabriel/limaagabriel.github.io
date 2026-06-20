export interface CardDescriptionProps {
	children: React.ReactNode
}

export function CardDescription({ children }: CardDescriptionProps) {
	return (
		<p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
			{children}
		</p>
	)
}
