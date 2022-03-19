/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import {BiEnvelope,BiLock} from 'react-icons/bi'
import { AiFillEyeInvisible, AiOutlineUser} from 'react-icons/ai'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import OtpInput from '../components/OtpInput'
import { useDispatch, useSelector } from 'react-redux'
import { requestSignup } from '../redux/actions/auth'
import ModalLoading from '../components/ModalLoading'
import ModalNotifError from '../components/ModalNotifError'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import { useRouter } from 'next/router'


const signup = () => {
	const [signup,setSignup] = useState()
	const otp = useSelector( state => state.otp?.otp )
	const dispatch = useDispatch()
	const auth = useSelector( state => state.auth )
	const router = useRouter()

	useEffect(()=>{
		console.log(signup)
		if(signup){
			console.log(true)
		} else{
			console.log(false)
		}
	},[signup])
	
	const onSignup = (event) =>{
		event.preventDefault()
		const firstname = event.target.elements['firstname'].value
		const lastname = event.target.elements['lastname'].value
		const email = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		const fullName = firstname + ' ' + lastname
		const data = {fullName, email, password}
		setSignup(data)
	}

	const onPin = (event) =>{
		event.preventDefault()
		const pin = otp
		const data = {...signup, pin}
		dispatch( requestSignup(data) )
		router.push('/login')
	}

	return (
		<>
			<ModalLoading isLoading={auth.isLoading} />
			<ModalNotifError message={auth.errorMsg} />
			<ModalNotifSuccess message={auth.successMsg} />
			<Row className='g-0 vh-100'>
				<Col sm={7}>
					<SidebarHome />
				</Col>
				<Col className='p-5 vh-100'>
					{!signup && 
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
						<form className='mb-3' onSubmit={onSignup}>
							<div className='d-flex position-relative align-items-center mb-4'>
								<input placeholder='Enter your firstname' name='firstname' type='text' className='w-100 input'/>
								<AiOutlineUser className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							</div>
							<div className='d-flex position-relative align-items-center mb-4'>
								<input placeholder='Enter your lastname' name='lastname' type='text' className='w-100 input'/>
								<AiOutlineUser className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							</div>
							<div className='d-flex position-relative align-items-center mb-4'>
								<input placeholder='Enter your email' name='email' type='email' className='w-100 input'/>
								<BiEnvelope className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							</div>
							<div className='d-flex position-relative align-items-center mb-5'>
								<input placeholder='Enter your password' name='password' type='password' className='w-100 input' id='password'/>
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
					}
					{signup && 
					<Container className='mt-5 px-3'>
						<div className='mb-4'>
							<div className='fw-bold fs-4'>Secure Your Account, Your Wallet,</div>
							<div className='fw-bold fs-4'>and Your Data With 6 Digits PIN</div>
							<div className='fw-bold fs-4'>That You Created Yourself.</div>
						</div>
						<div className='mb-5'>
							<div className='fs-7 text-pallet-6'>
						Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don&lsquo;t tell anyone about your Zwallet account password and the PIN.
							</div>
						</div>
						<form className='mb-3' onSubmit={onPin}>
							<OtpInput />
							<button type='submit' className='button-input fw-bold'>
							Confirm
							</button>
						</form>
					</Container>
					}
				</Col>
			</Row>
		</>
		
	)
}

export default signup