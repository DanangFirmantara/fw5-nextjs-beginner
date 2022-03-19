import React, { useState, useEffect } from 'react'
import styles from './OtpInput.module.css'
import OtpInputUser from 'react-otp-input'
import { useDispatch } from 'react-redux'
import { otp } from '../redux/actions/otp'

const OtpInput = () => {
	const [OTP,setOTP] = useState()
	const dispatch = useDispatch()

	useEffect(()=>{
		console.log(OTP)
		dispatch(otp(OTP))
	},[dispatch, OTP])

	return (
		<>
			<div className='d-flex justify-content-around mb-5'>
				<div>
					<OtpInputUser 
						value={OTP} onChange={(OTP)=>setOTP(OTP)} numInputs={6} className={styles.otp}
					/>
				</div>
			</div>
		</>
	)
}

export default OtpInput