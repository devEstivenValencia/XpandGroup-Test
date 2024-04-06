import '#/styles/globals.scss'
import 'animate.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Prueba tecnica junior-mid XpandGroup'
}

export default function RootLayout({ modal, children }: { modal: React.ReactNode; children: React.ReactNode }) {
	return (
		<html lang='es'>
			<body className={inter.className}>
				<main>{children}</main>
				{modal}
			</body>
		</html>
	)
}
