import React from 'react'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import { Container, Row, Col } from 'react-bootstrap'
import SidebarUser from '../components/SidebarUser'
import Image from 'next/image'

const History = () => {
	return (
		<>
			{/* history */}
			<NavbarUser />
			<Container className='vh-100'>
				<Row className='mt-5'>
					<Col sm={4} className='me-3'>
						<SidebarUser />
					</Col>
					<Col>
						<div className='bg-white shadow-dark rounded-2 sidebar-user'>
							<Container className='py-5'>
								<div className='d-flex justify-content-between align-items-center'>
									<div className='fw-bold fs-6'>Transaction History</div>
									<button  className='bg-pallet-4 rounded px-3 py-2 border-0 text-muted'>-- Select Filter --</button>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
									<div className='text-success fw-bold fs-7'>
											+Rp50.000
									</div>
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

export default History