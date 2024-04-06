import { Photo, PhotoDTO } from '#/components/Photo.component'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'

const maxPhotos = 150

type Params = { params: Pick<PhotoDTO, 'id'> }

export default async function Page({ params }: Params) {
	const { id } = params
	const photo: PhotoDTO = await fetch(`https://picsum.photos/id/${id}/info`)
		.then(res => res.json())
		.catch(reason => reason)

	const [prevPhoto, nextPhoto] = [+id - 1, +id + 1]
	const [hasPrev, hasNext] = [prevPhoto >= 0, nextPhoto <= maxPhotos]

	return (
		<section className={styles.page}>
			<Link href='/'>⬅️ Volver al inicio</Link>
			{photo?.id ? <Photo polaroidEffect {...photo} /> : `Imagen ${id} no disponible`}
			<nav className={styles.nav}>
				<a href={'/photo/' + prevPhoto} aria-disabled={!hasPrev}>
					Atras
				</a>
				<a href={'/photo/' + nextPhoto} aria-disabled={!hasNext}>
					Siguiente
				</a>
			</nav>
		</section>
	)
}

export function generateMetadata({ params }: Params): Metadata {
	return {
		title: 'Photo ' + params.id
	}
}

export function generateStaticParams() {
	const paths = Array.from({ length: maxPhotos }, (_, i) => i.toString())

	return paths.map(index => ({
		id: index
	}))
}
