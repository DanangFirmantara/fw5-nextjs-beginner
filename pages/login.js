/* eslint-disable react/react-in-jsx-scope */
import { Row,Col, Container } from 'react-bootstrap'
import SidebarHome from '../components/SidebarHome'
import {BiEnvelope,BiLock} from 'react-icons/bi'
import { AiFillEyeInvisible } from 'react-icons/ai'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/auth'
import ModalLoading from '../components/ModalLoading'
import ModalNotifError from '../components/ModalNotifError'
import ModalNotifSuccess from '../components/ModalNotifSuccess'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Login = () =>{
	const auth = useSelector(state=>state.auth)
	const dispatch = useDispatch()
	const router = useRouter()
	useEffect(()=>{
		if(auth.token){
			router.push('/home')
		}
	},[auth.token])

	const onLogin =(event)=>{
		event.preventDefault()
		const email = event.target.elements['email'].value
		const password = event.target.elements['password'].value
		const data = {email, password}
		dispatch(login(data))
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
				<Col className='p-5'>
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
						<form className='mb-3' onSubmit={onLogin}>
							<div className='d-flex position-relative align-items-center mb-4'>
								<input placeholder='Enter your email' type='email' className='w-100 input' name='email' autoComplete='off'/>
								<BiEnvelope className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
							</div>
							<div className='d-flex position-relative align-items-center mb-3'>
								<input placeholder='Enter your password' type='password' className='w-100 input' name='password' id='password'/>
								<BiLock className='position-absolute left-0 fs-4 text-pallet-6 ms-1'/>
								<AiFillEyeInvisible className='position-absolute end-0 fs-4 text-pallet-6 me-3' />
							</div>
							<div className='text-end mb-5'>
								<Link href='/forgot-password'>
									<a className='fw-semibold fs-8 text-pallet-6'>Forgot Password</a>
								</Link>
							</div>
							<button type='submit' className='button-input'>
							Login
							</button>
						</form>
						<div className='text-pallet-6 fs-7 text-center'>Don&lsquo;t have an account? Let%lsquo;s <Link href='/signup'><a className='text-pallet-1 fw-bold'> Sign Up</a></Link></div>
					</Container>
				</Col>
			</Row>
		</>
		
	)
}
export default Login