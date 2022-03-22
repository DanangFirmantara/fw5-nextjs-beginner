import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import {HiPlus} from 'react-icons/hi'
import {IoMdArrowUp} from 'react-icons/io'
import Image from 'next/image'
import BarChart from '../components/BarChart'
import Link from 'next/link'
import Layout from '../components/Layout'
import { useDispatch, useSelector} from 'react-redux'
import { Modal } from 'react-bootstrap'
import ModalNotifError from '../components/ModalNotifError'
import { topup } from '../redux/actions/transactions'

const Home = () => {
	const profile = useSelector(state => state.profile)
	const [phone, setPhone] = useState()
	const [balance, setBalance] = useState(0)
	const [show, setShow] = useState(false)
	const [errorTopup, setErrorTopup] = useState(false)
	const auth = useSelector(state => state.auth)
	const dispatch = useDispatch()

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(()=>{
		if( profile.phone && profile.phone.length > 0 ){
			setPhone(profile.phone[0].number)
		}
		if(profile.balance){
			setBalance(profile.balance)
		}
		
	},[dispatch, profile])

	const onTopup = (event)=>{
		event.preventDefault()
		const num =  event.target.elements['topup'].value
		if( !parseInt(num)){
			setErrorTopup('Top up must be Number')
		}
		if( num < 10000){
			setErrorTopup('Your Top Up must be exceeded Rp 10.000')
		}else {
			dispatch(topup(auth.token, num))
		}
	}

	return (
		<Layout >
			{	errorTopup &&
				<ModalNotifError message={errorTopup} />
			}
			<Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton centered>
					<Modal.Title id="contained-modal-title-vcenter" className='text-center'>Top Up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className=''>
						<div className='fs-7 text-muted mb-3'>Enter the amount of money, and click submit</div>
						<form onSubmit={onTopup}>
							<input type='text' className='rounded w-100 border border-2 border-pallet-3 py-3 mb-4 px-4' name='topup'/>
							<div className='d-flex justify-content-end'>
								<button type='submit' className='px-3 py-2 fs-6 bg-pallet-1 border-0 rounded text-white'>Submit</button>
							</div>
						</form>
					</div>
				</Modal.Body>
			</Modal>
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
										<div className='fs-1 fw-bold'>{balance ? `Rp. ${String(balance)}` : 'Rp. 0'}</div>
										<div className='fs-6'>{phone ? phone : ''}</div>
									</Col>
									<Col xs={3} >
										<div className='d-flex flex-column'>
											<Link href='/transfer'>
												<a className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
													<IoMdArrowUp className='fs-4 me-2 text-pallet-7'/>
													<div >Transfer</div>
												</a>
											</Link>
											<div onClick={handleShow} className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
												<HiPlus className='fs-4 me-2 text-pallet-7'/>
												<div >Top Up</div>
											</div>
										</div>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row className='mt-3'>
							<Col  xs={6} className='bg-pallet-2 rounded-2 shadow-dark py-2 mx-4 ms-0'>
								<BarChart data={[10,50,200,300]} labels={['1','2','3','4']} income={0} expense={0}/>
							</Col>
							<Col className='bg-pallet-2 rounded-2 shadow-dark py-4 px-4 '>
								<div >
									<div className='d-flex justify-content-between'>
										<div className='fw-bold fs-6'>Transaction History </div>
										<Link href='/history'>
											<a className='text-pallet-1 fs-6'>All</a>
										</Link>
										
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
		</Layout>
	)
}

export default Home