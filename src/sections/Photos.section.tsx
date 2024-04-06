import { Photo, PhotoDTO } from '#/components/Photo.component'
import { useCreateQuery } from '#/hooks/useCreateQuery.hook'
import { fetcher } from '#/utils/fetcher'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useSWRInfinite from 'swr/infinite'

import { usePhotos } from './usePhotos.hooks'

import styles from './Photos.module.scss'

export function PhotosSection() {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { createQuery } = useCreateQuery()
	const { photos, authors, photosByAuthor, size, setSize } = usePhotos()

	const selectAuthor = searchParams.get('author')

	const stickyRef = useRef<HTMLElement>(null)
	const navRef = useRef<HTMLElement>(null)

	const handleScroll = useCallback(() => {
		const currentStickyRef = stickyRef.current as HTMLElement
		const { offsetTop, clientHeight } = currentStickyRef

		let isSticky = false

		if (clientHeight > window.innerHeight) isSticky = window.scrollY >= offsetTop
		else isSticky = false

		navRef.current?.setAttribute('data-sticky', String(isSticky))
	}, [])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return (
		<section ref={stickyRef} className={styles['photos-section']}>
			<nav ref={navRef} className={styles['photos-nav']} data-sticky={false}>
				{authors?.map(author => (
					<Link
						key={author}
						href={selectAuthor === author ? pathname : createQuery('author', author)}
						scroll={false}
						data-select={selectAuthor === author}
					>
						{author}
					</Link>
				))}
			</nav>
			{/* TODO: Modularizar */}
			<div className={styles['photos-container']}>
				{(selectAuthor ? photosByAuthor[selectAuthor] : photos)?.map(photo => (
					<Link key={photo.id} href={`/photo/${photo.id}`} passHref>
						<Photo {...photo} />
					</Link>
				))}
			</div>
			{!selectAuthor ? (
				<button onClick={() => setSize(size + 1)} className={styles['load-more']}>
					Load More
				</button>
			) : null}
		</section>
	)
}
