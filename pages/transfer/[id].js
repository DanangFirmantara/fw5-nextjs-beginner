import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../../components/FooterUser'
import NavbarUser from '../../components/NavbarUser'
import SidebarUser from '../../components/SidebarUser'
import Image from 'next/image'
import {BsPencil} from 'react-icons/bs'
import {useRouter} from 'next/router'

const ReceiverUser = () => {
	const router = useRouter()
	const onTransfer = (event)=>{
		event.preventDefault()
		router.push('/confirmation')
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
								<div>
									<div className='text-pallet-6 fs-7 '>Type the amount you want to transfer and then</div>
									<div className='text-pallet-6 fs-7 '>press continue to the next steps.</div>
								</div>
								<div className='d-flex align-items-center justify-content-center'>
									<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onTransfer}>
										<input placeholder='0.00' className='text-center mt-5 mb-3 border-0 fs-1'/>
										<div className='fw-bold fs-7 mb-5'>Rp.120.000 Available</div>
										<div className='d-flex position-relative align-items-center mb-4'>
											<input placeholder='Add some notes' type='text' className='w-100 input'/>
											<BsPencil className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
										</div>
										<div className='my-5 w-100'>
											<button className='btn-pallet-1 text-white border-0 px-4 py-3 fs-5 rounded-2 shadow-dark w-100' type='submit'>Continue</button>
										</div>
									</form>
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

export default ReceiverUser