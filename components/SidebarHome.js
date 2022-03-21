import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import styles from './SidebarHome.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { resetMsg } from '../redux/actions/auth'


const SidebarHome = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	useEffect(()=>{
		dispatch(resetMsg())
		const token = window.localStorage.getItem('token')
		if(token){
			dispatch({
				type : 'AUTH_LOGIN_FULFILLED',
				payload :{
					data :{
						results: {
							token: token
						},
						success : true,
						message : 'Login success'
					}
				}
			})
		}
		if(auth.token){
			router.push('/home')
		}
	},[dispatch,auth.token , router.pathname])

	return (
		<>
			<div className='text-pallet-2 bg-pallet-1 bg-pallet-1 pattern px-5 py-5 sidebar'>
				<Container>
					<Link href='/'>
						<a className='fs-3 fw-bold text-pallet-2'>ZWallet</a>
					</Link>
				
					<div >
						<div className='w-75 '>
							<Image width={400} height={400} layout='responsive' className={styles.image} quality={100} src='/images/twoapp.png' alt='twoapp' />
						</div>
					</div>
					<div className='fw-bold fs-4 mb-4'>
				App that Covering Banking Needs.
					</div>
					<div className='text-white fs-7 w-75'>
				Zwallet is an application that focussing in banking needs for all users
				in the world. Always updated and always following world trends.
				5000+ users registered in Zwallet everyday with worldwide
				users coverage.
					</div>
				</Container>
			</div>
		</>
		
	)
}

export default SidebarHome