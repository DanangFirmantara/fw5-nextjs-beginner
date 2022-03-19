import http from '../../helpers/http'

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

export const logout = () =>{
	return({
		type :'AUTH_LOGOUT'
	})
}