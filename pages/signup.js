/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import {BiEnvelope,BiLock} from 'react-icons/bi'
import { AiFillEyeInvisible, AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link'


const signup = () => {
	return (
		<Row className='g-0 vh-100'>
			<Col sm={7}>
				<SidebarHome />
			</Col>
			<Col className='p-5 vh-100'>
				<Container className='mt-5 px-3'>
					<div className='mb-4'>
						<div className='fw-bold fs-4'>Start Accessing Banking Needs </div>
						<div className='fw-bold fs-4'>With All Devices and All Platforms</div>
						<div className='fw-bold fs-4'>With 30.000+ Users</div>
					</div>
					<div className='mb-5'>
						<div className='fs-7'>
						Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
						</div>
					</div>
					<form className='mb-3' >
						<div className='d-flex position-relative align-items-center mb-4'>
							<input placeholder='Enter your firstname' type='text' className='w-100 input'/>
							<AiOutlineUser className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
						</div>
						<div className='d-flex position-relative align-items-center mb-4'>
							<input placeholder='Enter your email' type='email' className='w-100 input'/>
							<AiOutlineUser className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
						</div>
						<div className='d-flex position-relative align-items-center mb-4'>
							<input placeholder='Enter your email' type='email' className='w-100 input'/>
							<BiEnvelope className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
						</div>
						<div className='d-flex position-relative align-items-center mb-5'>
							<input placeholder='Enter your password' type='password' className='w-100 input' name='password' id='password'/>
							<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
						</div>
						<button type='submit' className='button-input'>
							Sign Up
						</button>
					</form>
					<div className='text-pallet-6 fs-7 text-center'>Already have an account? Let&lsquo;s  
						<Link href='/login'><a className='text-pallet-1 fw-bold'> Login</a></Link></div>
				</Container>
			</Col>
		</Row>
	)
}

export default signup