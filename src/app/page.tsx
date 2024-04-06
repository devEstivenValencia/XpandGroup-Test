'use client'

import { PhotosSection } from '#/sections/Photos.section'
import { Suspense } from 'react'

import styles from './page.module.scss'

export default function Home() {
	return (
		<>
			<section className={styles.hero}>
				<img
					src='https://picsum.photos/1000'
					alt='Foto random'
					height={1000}
					width={1000}
					className='photo animate__animated animate__zoomInDown'
				/>
			</section>
			<Suspense>
				<PhotosSection />
			</Suspense>
		</>
	)
}
