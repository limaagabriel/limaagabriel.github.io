import { Section } from '@/components/Section'

function SpeakingSection({
	children,
	...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
	return (
		<Section {...props}>
			<div className="space-y-16">{children}</div>
		</Section>
	)
}

export default SpeakingSection
