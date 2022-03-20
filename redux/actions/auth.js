/* eslint-disable no-undef */
import http from '../../helpers/http'
const { FRONTEND_URL } = process.env

export const login = (data) =>{
	const { email, password } = data
	const param = new URLSearchParams()
	param.append('email', email)
	param.append('password', password)
	return({
		type:'AUTH_LOGIN',
		payload: http().post('/auth/login', param)
	})
}

export const forgotRequest = (email)=>{
	const param = new URLSearchParams()
	param.append('email', email)
	return({
		type:'AUTH_FORGOT_REQUEST',
		payload: http().post(`/auth/forgot-password?callback_url=${FRONTEND_URL}`, param)
	})
}

export const resetPassword = ( data ) =>{
	const { OTP, newPassword, confirmPassword } = data
	const param = new URLSearchParams()
	param.append('otp', OTP)
	param.append('newPassword', newPassword)
	param.append('confirmPassword', confirmPassword)
	return({
		type:'AUTH_FORGOT_REQUEST',
		payload: http().post('/auth/forgot-password', param)
	})
}

export const logout = () =>{
	return({
		type :'AUTH_LOGOUT'
	})
}

export const requestSignup = (data) =>{
	const { fullName, email, password, pin } = data
	const param = new URLSearchParams()
	param.append('fullName', fullName)
	param.append('email', email)
	param.append('password', password)
	param.append('pin', pin)
	return({
		type: 'AUTH_FORGOT_REQUEST',
		payload: http().post('/auth/register', param)
	})
}

export const resetMsg = () =>{
	return({
		type:'AUTH_RESET_MSG'
	})
}
