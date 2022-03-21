import http from '../../helpers/http'

export const getAllUsers = (token) =>{
	return({
		type: 'USERS_GET_ALL_USERS',
		payload : http(token).get('/users')
	})
}