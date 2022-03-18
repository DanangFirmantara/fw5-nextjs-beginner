import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import OtpInput from '../components/OtpInput'


const ChangePin = () => {
	const onChangePin = (event)=>{
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
									<div className='fw-bold fs-6'>Change Pin</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='w-50 text-pallet-6'>
									Enter your current 6 digits Zwallet PIN below to continue to the next steps.
									</div>
								</div>
								<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onChangePin}>
									<Row className='justify-content-center'>
										<Col xs={9} className='my-3'>
											<OtpInput />
										</Col>
										<Col xs={9} className='my-3'>
											<div className='w-100 '>
												<button className='btn-pallet-1 text-white border-0 px-4 py-3 fs-5 rounded-2 shadow-dark w-100' type='submit'>Continue</button>
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

export default ChangePin