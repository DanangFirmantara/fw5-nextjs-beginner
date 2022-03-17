/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import {BiEnvelope} from 'react-icons/bi'

import Link from 'next/link'

const ForgotPassword = () => {
	return (
		<Row className='g-0 vh-100'>
			<Col sm={7}>
				<SidebarHome />
			</Col>
			<Col className='p-5 vh-100'>
				<Container className='mt-5 px-3'>
					<div className='mb-4'>
						<div className='fw-bold fs-4'>Did You Forgot Your Password?</div>
						<div className='fw-bold fs-4'>Don&lsquo;t Worry, You Can Reset Your</div>
						<div className='fw-bold fs-4'>Password In a Minutes.</div>
					</div>
					<div className='mb-5'>
						<div className='fs-7 text-pallet-6'>
						To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
						</div>
					</div>
					<form className='mb-3' >
						<div className='d-flex position-relative align-items-center mb-5'>
							<input placeholder='Enter your email' type='email' className='w-100 input'/>
							<BiEnvelope className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
						</div>
						<button type='submit' className='button-input fw-bold'>
							Confirm
						</button>
					</form>
					<div className='text-pallet-6 fs-7 text-center'>Already have an account? Let&lsquo;s  
						<Link href='/login'><a className='text-pallet-1 fw-bold'> Login</a></Link></div>
				</Container>
			</Col>
		</Row>
	)
}

export default ForgotPassword