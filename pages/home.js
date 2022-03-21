import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import FooterUser from '../components/FooterUser'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import {HiPlus} from 'react-icons/hi'
import {IoMdArrowUp} from 'react-icons/io'
import Image from 'next/image'
import BarChart from '../components/BarChart'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect} from 'react'
import { getBalance, getPhoneList } from '../redux/actions/profile'
import { useRouter } from 'next/router'
import { resetMsg } from '../redux/actions/auth'
import { getAllUsers } from '../redux/actions/users'

const Home = () => {
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)
	const profile = useSelector(state => state.profile)
	const router = useRouter()

	useEffect(()=>{
		dispatch(resetMsg())
		if(!auth.token){
			router.push('/')
		} else {
			dispatch(getBalance(auth.token))
			dispatch(getPhoneList(auth.token))
			dispatch(getAllUsers(auth.token))
		}
	},[dispatch])

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
										<div className='fs-1 fw-bold'>Rp.{profile.balance}</div>
										<div className='fs-6'>{profile.phone? profile.phone[0].number : ''}</div>
									</Col>
									<Col xs={3} >
										<div className='d-flex flex-column'>
											<Link href='/transfer'>
												<a className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
													<IoMdArrowUp className='fs-4 me-2 text-pallet-7'/>
													<div >Transfer</div>
												</a>
											</Link>
											<Link href='/topup'>
												<a className='my-2 py-2 rounded-2 text-white fs-6 fw-bold bg-transparent border border-3 border-white d-flex justify-content-center align-items-center'>
													<HiPlus className='fs-4 me-2 text-pallet-7'/>
													<div >Top Up</div>
												</a>
											</Link>
											
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
		</>
	)
}

export default Home