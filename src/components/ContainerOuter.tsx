import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ContainerOuterProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ContainerOuter = forwardRef<
	React.ElementRef<'div'>,
	ContainerOuterProps
>(function OuterContainer({ className, children, ...props }, ref) {
	return (
		<div ref={ref} className={clsx('sm:px-8', className)} {...props}>
			<div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
		</div>
	)
})
