import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useCreateQuery() {
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const createQuery = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)
			params.toString()

			return pathname + '?' + params
		},
		[searchParams, pathname]
	)
	return { createQuery }
}
