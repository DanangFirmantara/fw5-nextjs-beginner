/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../../components/SidebarHome'
import {BiLock} from 'react-icons/bi'
import { AiFillEyeInvisible} from 'react-icons/ai'

const ResetPassword = () => {
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
							<input placeholder='Create new password' type='password' className='w-100 input' name='password' id='password'/>
							<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
						</div>
						<div className='d-flex position-relative align-items-center mb-5'>
							<input placeholder='Confirm password' type='password' className='w-100 input' name='password' id='password'/>
							<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
						</div>
						<button type='submit' className='button-input fw-bold'>
							Reset Password
						</button>
					</form>	
				</Container>
			</Col>
		</Row>
	)
}

export default ResetPassword