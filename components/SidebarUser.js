import React, { useEffect, useState } from 'react'
import {IoGridOutline,} from 'react-icons/io5'
import {IoMdArrowUp} from 'react-icons/io'
import {HiPlus} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router' 
import { useDispatch, useSelector } from 'react-redux'
import { logout} from '../redux/actions/auth'


const SidebarUser = () => {
	const router = useRouter()
	const [active,setActive] = useState('/home')
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	useEffect(()=>{
		
		if(router.pathname === '/history'){
			router.pathname = '/home'
		} else if(router.pathname === '/transfer/[id]' || router.pathname === '/confirmation' || router.pathname === '/status'){
			router.pathname = '/transfer'
		} else if(router.pathname === '/personal-information' || router.pathname === '/manage-phone' || router.pathname === '/add-phone' || router.pathname === '/change-password' || router.pathname === '/change-pin'){
			router.pathname = '/profile'
		}
		setActive(router.pathname)
	},[dispatch, router.pathname, auth.token])

	const menu=[
		{link:'/home', name:'Dasboard', icon: IoGridOutline},
		{link:'/transfer', name:'Transfer', icon:IoMdArrowUp},
		{link:'/topup', name:'Top Up', icon: HiPlus},
		{link:'/profile', name:'Profile', icon: AiOutlineUser},
	]

	const onLogout = ()=> dispatch(logout())

	return (
		<>
			{/* {!auth.token && <Link href='/' />} */}
			<div className='bg-white shadow-dark rounded-2 sidebar-user'>
				<ul className='py-5 menu '> 
					{menu.map(items=>{
						const Icon = items.icon
						return(
							<li key={String(items.name)} className='my-5'>
								<Link href={items.link}>
									<a className={active=== items.link? 'active text-pallet-1':'text-pallet-1'}>
										<Icon className='me-3'/>
										{items.name}
									</a>
								</Link>
							</li>
						)
					})}
					<li className='mt-5'>
						<button onClick={onLogout} className='bg-transparent border-0'>
							<a>
								<FiLogOut className='me-3'/>
							Logout
							</a>
						</button>
					</li>
				</ul>
			</div>		
		</>
	)
}

export default SidebarUser