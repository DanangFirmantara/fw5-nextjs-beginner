import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import styles from './SidebarHome.module.css'
import Link from 'next/link'

const SidebarHome = () => {
	return (
		<div className='text-pallet-2 bg-pallet-1 bg-pallet-1 pattern px-5 py-5'>
			<Container className='vh-100'>
				<Link href='/'>
					<a className='fs-3 fw-bold text-pallet-2'>ZWallet</a>
				</Link>
				
				<div >
					<div className='w-75 '>
						<Image width={400} height={400} layout='responsive' className={styles.image} quality={100} src='/images/twoapp.png' alt='twoapp' />
					</div>
				</div>
				<div className='fw-bold fs-4 mb-4'>
				App that Covering Banking Needs.
				</div>
				<div className='text-white fs-7 w-75'>
				Zwallet is an application that focussing in banking needs for all users
				in the world. Always updated and always following world trends.
				5000+ users registered in Zwallet everyday with worldwide
				users coverage.
				</div>
			</Container>
		</div>
	)
}

export default SidebarHome