import { forwardRef } from 'react'
import clsx from 'clsx'

export interface ContainerInnerProps extends React.ComponentPropsWithoutRef<'div'> {}

export const ContainerInner = forwardRef<
	React.ElementRef<'div'>,
	ContainerInnerProps
>(function InnerContainer({ className, children, ...props }, ref) {
	return (
		<div
			ref={ref}
			className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
			{...props}
		>
			<div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
		</div>
	)
})
