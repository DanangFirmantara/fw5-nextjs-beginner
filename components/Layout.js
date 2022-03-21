/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { resetMsg } from '../redux/actions/auth'
import { getProfile, getBalance, getPhoneList } from '../redux/actions/profile'


const Layout = ({children}) =>{
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)
	const router = useRouter()

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
		if(!auth.token){
			router.push('/')
		} else{
			dispatch(getProfile(auth.token))
			dispatch(getBalance(auth.token))
			dispatch(getPhoneList(auth.token))
		}
		
	},[dispatch, auth.token])

	return(
		<>
			{children}
		</>
	)
}

export default Layout