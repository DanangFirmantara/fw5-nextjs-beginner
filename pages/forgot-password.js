/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import {BiEnvelope} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { forgotRequest, resetPassword } from '../redux/actions/auth'
import ModalLoading from '../components/ModalLoading'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import ModalNotfiError from '../components/ModalNotifError'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {BiLock} from 'react-icons/bi'
import { AiFillEyeInvisible} from 'react-icons/ai'	

const ForgotPassword = () => {
	const [OTP,setOTP] = useState(null)
	const dispatch = useDispatch()
	const auth = useSelector(state=>state.auth)
	const router = useRouter()

	useEffect(()=>{
		if(router.query.otp){
			setOTP(router.query.otp)
		}
	},[router.query.otp])

	const onForgotRequest = (event) =>{
		event.preventDefault()
		const email = event.target.elements['email'].value
		dispatch(forgotRequest(email))
	}

	const onResetPassword = (event) =>{
		event.preventDefault()
		const newPassword = event.target.elements['newPassword'].value
		const confirmPassword = event.target.elements['confirmPassword'].value
		const data = { OTP, newPassword, confirmPassword }
		dispatch( resetPassword( data ) )
		router.push('/login')
	}

	return (
		<>
			<ModalLoading isLoading={auth.isLoading} />
			<ModalNotifSuccess message={auth.successMsg} />
			<ModalNotfiError message={auth.errorMsg} />
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
								{!OTP ? 'To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.' : 'Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.'
								}
							</div>
						</div>
						{!OTP && 
						<form className='mb-3' onSubmit={onForgotRequest}>
							<div className='d-flex position-relative align-items-center mb-5'>
								<input placeholder='Enter your email' type='email' className='w-100 input' name='email' autoComplete='off'/>
								<BiEnvelope className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							</div>
							<button type='submit' className='button-input fw-bold'>
						Confirm
							</button>
						</form>
						}
						{OTP && 
							<form className='mb-3' onSubmit={onResetPassword}>
								<div className='d-flex position-relative align-items-center mb-5'>
									<input placeholder='Create new password' type='password' className='w-100 input' name='newPassword' id='password'/>
									<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
									<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
								</div>
								<div className='d-flex position-relative align-items-center mb-5'>
									<input placeholder='Confirm password' type='password' className='w-100 input' name='confirmPassword' id='password'/>
									<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
									<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
								</div>
								<button type='submit' className='button-input fw-bold'>
								Reset Password
								</button>
							</form>
						}
					</Container>
				</Col>
			</Row>
		</>
		
	)
}

export default ForgotPassword