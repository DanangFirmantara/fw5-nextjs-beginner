import React, { useState } from 'react'
import { Row, Col, Container, Modal } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import Image from 'next/image'
import OtpInput from '../components/OtpInput'
import {useRouter} from 'next/router'


const Confirmation = () => {
	const [show, setShow] = useState(false)
	const router = useRouter()

	const handleShow = () =>setShow(true)
	const handleClose = () =>setShow(false)
	const onPin=(event)=>{
		event.preventDefault()
		router.push('/status')
	}

	return (
		<>
			<Modal show={show} onHide={handleClose} >
				<Modal.Header closeButton>
					<Modal.Title >Enter PIN to Transfer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className='w-75 mb-4'>Enter your 6 digits PIN for confirmation to continue transferring money.</div>
					<form onSubmit={onPin}>
						<div className='w-100'>
							<OtpInput />
						</div>
						<div className='d-flex justify-content-end'>
							<button type='submit' className='btn-pallet-1 text-white border-0 px-5 py-3 fs-5 rounded-2 shadow-dark'>Continue</button>
						</div>
					</form> 
				</Modal.Body>
				<div></div>
			</Modal> 
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
									<div className='fw-bold fs-6'>Transaction History</div>
								</div>
								<div className='d-flex justify-content-between align-items-center my-4'>
									<div className='d-flex align-items-center'>
										<Image src='/images/1.png' alt='user' width={65} height={65} />
										<div className='ms-4'>
											<div className='fw-bold fs-7'>Samuel Sushi</div>
											<div className='fs-8'>Accept</div>
										</div>
									</div>
								</div>
								<div className='fw-bold fs-6'>Details</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Amount</div>
									<div className='fw-bold fs-4'>Rp.100.000</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Balance Left</div>
									<div className='fw-bold fs-4'>Rp.20.000</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Date & Time</div>
									<div className='fw-bold fs-4'>May 11, 2020 - 12.20</div>
								</div>
								<div className='w-100 py-3 px-3'>
									<div className='fs-7 text-muted'>Notes</div>
									<div className='fw-bold fs-4'>For buying some socks</div>
								</div>
								<div className='d-flex justify-content-end'>
									<button className='btn-pallet-1 text-white border-0 px-5 py-3 fs-5 rounded-2 shadow-dark' onClick={handleShow}>Continue</button>
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

export default Confirmation