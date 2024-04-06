import { PhotoDTO } from '#/components/Photo.component'
import { fetcher } from '#/utils/fetcher'
import { useMemo } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'

interface PhotosByAuthor {
	[key: string]: PhotoDTO[]
}

const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData: PhotoDTO[]) => {
	if (previousPageData && !previousPageData.length) return null

	return `https://picsum.photos/v2/list?page=${pageIndex + 1}&limit=10`
}

export function usePhotos() {
	const { data, size, setSize } = useSWRInfinite(getKey, fetcher, {
		parallel: false
	})

	const photos: PhotoDTO[] = Array().concat(...(data || []))

	const photosByAuthor: PhotosByAuthor = useMemo(
		() =>
			photos?.reduce((acc: any, object: any) => {
				const author = object.author
				acc[author] = acc[author] || []
				acc[author].push(object)
				return acc
			}, {}),
		[photos]
	)

	const authors = photosByAuthor && Object?.keys(photosByAuthor)

	return { photos, authors, photosByAuthor, size, setSize }
}
