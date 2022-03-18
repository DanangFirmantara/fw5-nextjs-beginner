import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import { useRouter } from 'next/router'
import {AiOutlinePhone} from 'react-icons/ai'

const AddPhoneNumber = () => {
	const router = useRouter()
	const onAdd = (event)=>{
		event.preventDefault()
		console.log(event)
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
									Add at least one phone number for the transfer ID so you can start transfering your money to another user.
									</div>
								</div>
								<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onAdd}>
									<Row className='justify-content-center'>
										<Col xs={9}>
											<div className='d-flex position-relative align-items-center mb-5'>
												<input placeholder='Add some notes' type='text' className='w-100 input phone'/>
												<div className='position-absolute left-0 d-flex me-5 d-flex align-items-center'>
													<AiOutlinePhone className='fs-3 text-pallet-6 me-2'/>
													<div className='me-5'>+62</div>
												</div>
											</div>
											
										</Col>
										<Col xs={9}>
											<div className='w-100 '>
												<button className='btn-pallet-1 text-white border-0 px-4 py-3 fs-5 rounded-2 shadow-dark w-100' type='submit'>Add Phone Number</button>
											</div>
										</Col>
									</Row>
									
									
								</form>
							</Container>
						</div>
					</Col>
				</Row>
			</Container>
			<FooterUser />
		</>
	)
}

export default AddPhoneNumber