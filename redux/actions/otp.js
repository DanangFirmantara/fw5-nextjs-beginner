export const otp = (otp) =>{
	return({
		type : 'OTP_ADD',
		payload:{
			otp
		}
	})
}