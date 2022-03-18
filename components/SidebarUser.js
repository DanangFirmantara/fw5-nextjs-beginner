import React, { useEffect, useState } from 'react'
import {IoGridOutline,} from 'react-icons/io5'
import {IoMdArrowUp} from 'react-icons/io'
import {HiPlus} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router' 


const SidebarUser = () => {
	const router = useRouter()
	const [active,setActive] = useState('/home')

	useEffect(()=>{
		if(router.pathname === '/history'){
			router.pathname = '/home'
		} else{
			setActive(router.pathname)
		}
	},[router.pathname])

	const menu=[
		{link:'/home', name:'Dasboard', icon: IoGridOutline},
		{link:'/transfer', name:'Transfer', icon:IoMdArrowUp},
		{link:'/topup', name:'Top Up', icon: HiPlus},
		{link:'/profile', name:'Profile', icon: AiOutlineUser},
	]

	return (
		<>
			<div className='bg-white shadow-dark rounded-2 sidebar-user'>
				<ul className='py-5 menu '> 
					{menu.map(items=>{
						const Icon = items.icon
						return(
							<li key={String(items.name)} className='my-5'>
								<Link href={items.link}>
									<a className={active=== items.link? 'active':''}>
										<Icon className='me-3'/>
										{items.name}
									</a>
								</Link>
							</li>
						)
					})}
					<li className='mt-5'>
						<Link href='/'>
							<a>
								<FiLogOut className='me-3'/>
							Logout
							</a>
						</Link>
					</li>
				</ul>
			</div>		
		</>
	)
}

export default SidebarUser