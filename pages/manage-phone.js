import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import { useRouter } from 'next/router'
import {RiDeleteBin7Line} from 'react-icons/ri'
import Link from 'next/link'

const ManagePhoneNumber = () => {
	const router = useRouter()
	const onDelete = ()=>{
		router.push('/manage-phone')
	}
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
							<Container className='py-5'>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='fw-bold fs-6'>Personal Information</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='w-50 text-pallet-6'>
									You can only delete the phone number and then you must add another phone number.
									</div>
								</div>
								<div className='w-100 py-3 px-3 d-flex align-items-center position-relative'>
									<div>
										<div className='fs-7 text-muted'>Primary</div>
										<div className='fw-bold fs-4'>+62 813-9387-7946</div>
									</div>
									<button className='bg-transparent border-0 position-absolute fs-7 fw-semibold text-pallet-6 end-0 me-5' onClick={onDelete}><RiDeleteBin7Line className='fs-4 deleted'/></button>
								</div>
								<div className='w-100 py-3 px-3 d-flex align-items-center justify-content-end pe-5'>
									<Link href='/add-phone'>
										<a className='fs-8 text-muted'>
										Add Phone Number
										</a>
									</Link>
									
								</div>
							</Container>
							
						</div>
					</Col>
				</Row>
			</Container>
			<FooterUser />
		</>
	)
}

export default ManagePhoneNumber