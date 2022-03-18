import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import { useRouter } from 'next/router'

const PersonalInformation = () => {
	const router = useRouter()
	const onManage = ()=>{
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
									We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.
									</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>First Name</div>
									<div className='fw-bold fs-4'>Robert</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Last Name</div>
									<div className='fw-bold fs-4'>Chandler</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Verified E-mail</div>
									<div className='fw-bold fs-4 text-muted'>pewdiepie1@gmail.com</div>
								</div>
								<div className='w-100 py-3 px-3 d-flex align-items-center position-relative'>
									<div>
										<div className='fs-7 text-muted'>Phone Number</div>
										<div className='fw-bold fs-4'>+62 813-9387-7946</div>
									</div>
									<button className='bg-transparent border-0 position-absolute fs-7 fw-semibold text-pallet-1 end-0 me-5' onClick={onManage}>Manage</button>
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

export default PersonalInformation