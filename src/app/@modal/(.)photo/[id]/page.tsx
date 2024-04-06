'use client'

import { Photo, PhotoDTO } from '#/components/Photo.component'
import { fetcher } from '#/utils/fetcher'
import Modal from '@mui/material/Modal'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import useSWR from 'swr'

export default function PhotoModal({ params: { id } }: { params: { id: string } }) {
	const router = useRouter()
	const { data: photo, isLoading, error } = useSWR(`https://picsum.photos/id/${id}/info`, fetcher)

	const [open, setOpen] = useState(true)

	const handleClose = () => {
		router.back()
		setOpen(false)
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backdropFilter: 'blur(5px)'
			}}
			aria-labelledby='modal-title'
			aria-describedby='modal-description'
		>
			<Photo polaroidEffect {...photo}>
				<Link href='#' target='_blank'>↗️</Link>
			</Photo>
		</Modal>
	)
}
