import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './Photo.module.scss'

export interface PhotoDTO {
	id: string
	author: string
	width: number
	height: number
	url: string
	download_url: string
}

interface Photo extends PhotoDTO {
	children?: React.ReactNode
	polaroidEffect?: boolean
}

export function Photo({ ...props }: Photo) {
	function ImagePhoto() {
		return (
			<Image
				src={props?.download_url}
				alt={props?.author}
				className='photo'
				height={1080}
				width={1920}
				loading='lazy'
			/>
		)
	}

	return props?.polaroidEffect ? (
		<article className={styles['photo-polaroid']} {...props}>
			<ImagePhoto />
			<h3 className={styles['photo-title']}>{props?.author}</h3>
			<div className={styles['photo-info']}>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
				<p>
					{props?.width}px x {props?.height}px
				</p>
				{props?.children}
			</div>
		</article>
	) : (
		<ImagePhoto />
	)
}
