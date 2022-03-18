import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import Image from 'next/image'
import {BsPencil} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
import Link from 'next/link'

const Profile = () => {
	return (
		<>
			<NavbarUser/>
			<Container className='vh-100'>
				<Row className='mt-5'>
					<Col sm={4}>
						<SidebarUser />
					</Col>
					<Col>
						<div className='bg-white shadow-dark rounded-2 sidebar-user'>
							<Container className='py-3'>
								<div className='d-flex justify-content-center'>
									<div className='text-center'>
										<div className='mb-3'><Image src='/images/1.png' alt='user' width={65} height={65} /></div>
										<div className='mb-3'><button className='bg-transparent border-0 text-pallet-6'><BsPencil className='me-1 fs-8'/>Edit</button></div>
										<div className='fs-4 fw-bold'>Robert Chandler</div>
										<div className='fs-7 text-muted'>+62 813-9387-7946</div>
									</div>
								</div>
								<Row className='mt-4'>
									<Link href='/personal-information'>
										<a className='text-pallet-3'>
											<Col xs={8} className='mx-auto d-flex align-items-center position-relative'>
												<div className='bg-pallet-8 px-4 py-3 rounded my-2 w-100'>Personal Information</div>
												<FaArrowRight className='text-end position-absolute end-0 me-4 fs-5 text-muted'/>
											</Col>
										</a>
									</Link>
									<Link href='/change-password'>
										<a className='text-pallet-3'>
											<Col xs={8} className='mx-auto d-flex align-items-center position-relative'>
												<div className='bg-pallet-8 px-4 py-3 rounded my-2 w-100'>Change Password </div>
												<FaArrowRight className='text-end position-absolute end-0 me-4 fs-5 text-muted'/>
											</Col>
										</a>
									</Link>
									<Link href='/change-pin'>
										<a className='text-pallet-3'>
											<Col xs={8} className='mx-auto d-flex align-items-center position-relative'>
												<div className='bg-pallet-8 px-4 py-3 rounded my-2 w-100'>Change Pin </div>
												<FaArrowRight className='text-end position-absolute end-0 me-4 fs-5 text-muted'/>
											</Col>
										</a>
									</Link>
									<Link href='/'>
										<a className='text-pallet-3'>
											<Col xs={8} className='mx-auto'>
												<div className='bg-pallet-8 px-4 py-3 rounded my-2'>Logout</div>
											</Col>
										</a>
									</Link>
									
								</Row>
								
							</Container>
					
						</div>
					</Col>
				</Row>
			</Container>
			<FooterUser />
		</>
	)
}
export default Profile