import http from '../../helpers/http'

export const getBalance = (token) =>{
	return({
		type : 'PROFILE_GET_BALANCE',
		payload : http(token).get('/profile/balance')
	})
}

export const getProfile = (token) =>{
	return({
		type : 'PROFILE_GET_PROFILE',
		payload : http(token).get('/profile')
	})
}
export const getPhoneList = (token) =>{
	return({
		type : 'PROFILE_GET_PHONE_LIST',
		payload : http(token).get('/profile/phones')
	})
}

