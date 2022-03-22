import http from '../../helpers/http'

export const topup = (token, topup) =>{
	const param = new URLSearchParams()
	param.append('amount', topup)
	return({
		type : 'TRANSACTIONS_TOP_UP',
		payload : http(token).post('/transactions/topup',param)
	})
}