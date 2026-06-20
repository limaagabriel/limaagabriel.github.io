import { useEffect, useRef } from 'react'

function usePrevious<T>(value: T) {
	let ref = useRef<T | undefined>(undefined)

	useEffect(() => {
		ref.current = value
	}, [value])

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return ref.current
}

export default usePrevious
