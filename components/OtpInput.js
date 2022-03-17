import React, { useEffect } from 'react'
import styles from './OtpInput.module.css'

const OtpInput = () => {
	const otp=[
		{item:1},
		{item:2},
		{item:3},
		{item:4},
		{item:5},
		{item:6},
	]

	useEffect(()=>{
		console.log(otp)
		otp.map(item=>{
			console.log(item)
		})
	},[])

	return (
		<>
			<div className='d-flex justify-content-around mb-5'>
				{otp.map(item=>{
					return(
						<div key={item.item}>
							<input className={styles.input} placeholder={item.item}/>
						</div>
					)
				})}
			</div>
			
		</>
	)
}

export default OtpInput