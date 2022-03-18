import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import {HiPlus} from 'react-icons/hi'
import {IoMdArrowUp} from 'react-icons/io'
import Image from 'next/image'
import BarChart from '../components/BarChart'

const Home = () => {
	return (
		<>
			<NavbarUser/>
			<Container className='vh-100'>
				<Row className='mt-5'>
					<Col sm={4} className='me-3'>
						<SidebarUser />
					</Col>
					<Col>
						<Row >
							<Col xs={12} className='bg-pallet-1 py-4 rounded-2 shadow-dark text-pallet-2'>
								<Row className='justify-content-between px-3 '>
									<Col>
										<div className='fs-6'>Balance</div>
										<div className='fs-1 fw-bold'>Rp.120.000</div>
										<div className='fs-6'>+62 813-9387-7946</div>
									</Col>
									<Col xs={3} >
										<div className='d-flex flex-column'>
											<div className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
												<IoMdArrowUp className='fs-4 me-2 text-pallet-7'/>
												<div >Transfer</div>
											</div>
											<div className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
												<HiPlus className='fs-4 me-2 text-pallet-7'/>
												<div >Top Up</div>
											</div>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row className='mt-3'>
							<Col  xs={7} className='bg-pallet-2 rounded-2 shadow-dark py-2 mx-4 ms-0'>
								<BarChart data={[10,50,200,300]} labels={['1','2','3','4']} income={0} expense={0}/>
							</Col>
							<Col className='bg-pallet-2 rounded-2 shadow-dark py-4 px-4 mx-3'>
								<div >
									<div className='d-flex justify-content-between'>
										<div className='fw-bold fs-6'>Transaction History </div>
										<div className='text-pallet-1 fs-6'>All</div>
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
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<FooterUser />
		</>
	)
}

export default Home