import { forwardRef } from 'react'

import {
	ContainerOuter,
	ContainerOuterProps,
} from '@/components/ContainerOuter'
import {
	ContainerInner,
	ContainerInnerProps,
} from '@/components/ContainerInner'

export type { ContainerOuterProps, ContainerInnerProps }
export { ContainerOuter, ContainerInner }

export const Container = forwardRef<
	React.ElementRef<typeof ContainerOuter>,
	ContainerOuterProps
>(function Container({ children, ...props }, ref) {
	return (
		<ContainerOuter ref={ref} {...props}>
			<ContainerInner>{children}</ContainerInner>
		</ContainerOuter>
	)
})
