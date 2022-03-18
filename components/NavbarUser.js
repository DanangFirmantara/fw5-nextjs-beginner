import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Image from 'next/image'
import {AiOutlineBell} from 'react-icons/ai'
import Link from 'next/link'

const NavbarUser = () => {
	return (
		<Navbar bg='pallet-2' variant='light' className='py-4 user navbar'>
			<Container>
				<Navbar.Brand href='/home'>
					<div className='text-pallet-1 fs-3 fw-bold'>
						Zwallet
					</div>
				</Navbar.Brand>
				<Navbar.Collapse className='justify-content-end align-items-center'>
					<div className='mx-4'>
						<Link href='/profile'>
							<Image src='/images/1.png' alt='user' width={65} height={65} />
						</Link>
						
					</div>
					<div className='text-start me-5'>
						<div className='fw-bold fs-6'>Robert Chandler</div>
						<div className='fs-8'>+62 8139 3877 7946</div>
					</div>
					<div>
						<AiOutlineBell className='fs-2'/>
					</div>
					
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavbarUser