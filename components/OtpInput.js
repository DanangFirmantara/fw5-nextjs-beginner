import React, { useEffect, useState } from 'react'
import styles from './OtpInput.module.css'
import OtpInputUser from 'react-otp-input'

const OtpInput = () => {
	const [OTP,setOTP] = useState()

	useEffect(()=>{
		console.log(OTP)
	},[OTP])

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