import React, { useEffect, useState } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Image from 'next/image'
import {AiOutlineBell} from 'react-icons/ai'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const NavbarUser = () => {
	const profile = useSelector(state => state.profile)
	const [profileUser, setProfileUser] = useState()
	const [imgUser, setImgUser] = useState(null)
	const [phone, setPhone] = useState()
	useEffect(()=>{
		console.log(profile)
		if(profile.profile){
			setProfileUser(profile.profile.fullName)
			if(profile.profile.picture){
				setImgUser(profile.profile.picture)
			}
		}
		if(profile.phone && profile.phone.length > 0){
			setPhone(profile.phone[0].number)
		}
	},[profile])
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
							<Image src={imgUser ? imgUser : '/images/2.png'} alt='user' width={65} height={65} />
						</Link>
						
					</div>
					<div className='text-start me-5'>
						<div className='fw-bold fs-6'>{profileUser ? profileUser : ''}</div>
						<div className='fs-8'>{phone ? phone : ''}</div>
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