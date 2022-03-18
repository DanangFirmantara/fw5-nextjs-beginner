import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import { AiFillEyeInvisible } from 'react-icons/ai'
import {BiLock} from 'react-icons/bi'

const ChangePassword = () => {
	const onChangePassword = (event)=>{
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
									<div className='fw-bold fs-6'>Change Password</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='w-50 text-pallet-6'>
									You must enter your current password and then type your new password twice.
									</div>
								</div>
								<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onChangePassword}>
									<Row className='justify-content-center'>
										<Col xs={9} className='my-3'>
											<div className='d-flex position-relative align-items-center mb-3'>
												<input placeholder='Current password' type='password' className='w-100 input' name='password' id='password'/>
												<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
												<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
											</div>
										</Col>
										<Col xs={9} className='my-3'>
											<div className='d-flex position-relative align-items-center mb-3'>
												<input placeholder='New password' type='password' className='w-100 input' name='password' id='password'/>
												<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
												<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
											</div>
										</Col>
										<Col xs={9} className='my-3'>
											<div className='d-flex position-relative align-items-center mb-3'>
												<input placeholder='Repeat new password' type='password' className='w-100 input' name='password' id='password'/>
												<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
												<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
											</div>
										</Col>
										<Col xs={9} className='my-3'>
											<div className='w-100 '>
												<button className='btn-pallet-1 text-white border-0 px-4 py-3 fs-5 rounded-2 shadow-dark w-100' type='submit'>Change Password</button>
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

export default ChangePassword